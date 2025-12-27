import shutil
import os

src = r"C:\Users\Asus\.gemini\antigravity\brain\0b945e68-8c0d-4a9f-99e6-ae151786a75c\friendly_farmer_support_1766757480209.png"
dst = r"c:\Users\Asus\Desktop\kishan_sarthi\frontend\assets\hero-friendly.png"

try:
    if not os.path.exists(os.path.dirname(dst)):
        os.makedirs(os.path.dirname(dst))
    shutil.copy2(src, dst)
    print(f"Successfully copied from {src} to {dst}")
except Exception as e:
    print(f"Error: {e}")
