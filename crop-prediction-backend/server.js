const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { PythonShell } = require("python-shell");
const fs = require("fs");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 5000;
const JWT_SECRET = "kishansarthi_jwt_secret_2025";

// ─── MongoDB Connection ────────────────────────────────────────────────────────
mongoose
  .connect("mongodb://localhost:27017/kishan_sarthi")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.warn("⚠️  MongoDB not connected:", err.message));

// ─── User Schema ───────────────────────────────────────────────────────────────
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["farmer", "expert"], default: "farmer" },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Serve index.html for root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ─── JWT Auth Middleware ───────────────────────────────────────────────────────
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// ─── Auth Routes ──────────────────────────────────────────────────────────────

// POST /api/auth/register
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email and password are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ error: "An account with this email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, phone, password: hashed });

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
});

// POST /api/auth/login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
});

// GET /api/auth/me
app.get("/api/auth/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ─── Multer / File Upload ──────────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only image files are allowed"));
  },
});

// ─── Prediction Routes ─────────────────────────────────────────────────────────
app.post("/predict", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image file provided" });
  }

  const region = req.body.region || "";
  const imagePath = req.file.path;

  const options = {
    mode: "json",
    pythonPath: "python",
    scriptPath: path.join(__dirname, "ml_model"),
    args: [imagePath, region],
  };

  PythonShell.run("predict.py", options)
    .then((results) => {
      fs.unlinkSync(imagePath);
      if (results && results.length > 0) res.json(results[0]);
      else res.status(500).json({ error: "No prediction results received" });
    })
    .catch((err) => {
      console.error("Prediction error:", err);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
      res.status(500).json({ error: "Failed to process the image", details: err.message });
    });
});

app.get("/model-status", (req, res) => {
  const modelPath = path.join(__dirname, "ml_model", "models", "crop_prediction_model.joblib");
  res.json({ modelExists: fs.existsSync(modelPath) });
});

app.post("/train-model", (req, res) => {
  const options = {
    mode: "json",
    pythonPath: "python",
    scriptPath: path.join(__dirname, "ml_model"),
  };
  PythonShell.run("train_model.py", options)
    .then((results) => {
      if (results && results.length > 0) res.json(results[0]);
      else res.status(500).json({ error: "No training results received" });
    })
    .catch((err) => {
      console.error("Training error:", err);
      res.status(500).json({ error: "Failed to train the model", details: err.message });
    });
});

// ─── Start Server ──────────────────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
