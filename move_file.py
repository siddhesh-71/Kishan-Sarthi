import shutil
import os

src = r"C:\Users\Asus\.gemini\antigravity\brain\c98cd242-39fe-442a-a01e-59274da351f3\hero_image_1770141233336.png"
dst = r"c:\Users\Asus\Desktop\kishan_sarthi\frontend\assets\hero_image.png"

try:
    print(f"Attempting to copy from {src} to {dst}")
    if not os.path.exists(src):
        print("Source file does not exist!")
    else:
        shutil.copy2(src, dst)
        print("Copy successful!")
except Exception as e:
    print(f"Error: {e}")
