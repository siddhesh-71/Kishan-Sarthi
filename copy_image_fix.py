import shutil
import os
import sys

src = r"C:\Users\Asus\.gemini\antigravity\brain\c98cd242-39fe-442a-a01e-59274da351f3\hero_image_1770141233336.png"
dst = r"c:\Users\Asus\Desktop\kishan_sarthi\frontend\assets\hero_image.png"

try:
    print(f"Copying from {src} to {dst}")
    if not os.path.exists(src):
        print(f"Source not found: {src}")
        sys.exit(1)
    
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)
    print("Copy success!")
    
    if os.path.exists(dst):
        print(f"File verified at {dst}")
        print(f"Size: {os.path.getsize(dst)} bytes")
    else:
        print("File not found after copy!")

except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
