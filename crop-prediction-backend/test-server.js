// Simple test to verify server can start
const express = require("express");
const app = express();
const port = 5000;

app.get("/test", (req, res) => {
    res.json({ status: "Server is working!" });
});

app.listen(port, () => {
    console.log(`Test server running on http://localhost:${port}`);
    console.log("If you see this message, Node.js and Express are working correctly");
});

// Add error handler
app.on('error', (err) => {
    console.error("Server error:", err);
});
