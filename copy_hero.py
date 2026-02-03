import os

src = r"C:\Users\Asus\.gemini\antigravity\brain\c98cd242-39fe-442a-a01e-59274da351f3\hero_image_1770141233336.png"
dst = r"c:\Users\Asus\Desktop\kishan_sarthi\frontend\assets\hero_image.png"

print(f"Source exists: {os.path.exists(src)}")
print(f"Destination dir exists: {os.path.exists(os.path.dirname(dst))}")

if os.path.exists(src):
    with open(src, 'rb') as f_src:
        data = f_src.read()
    
    with open(dst, 'wb') as f_dst:
        f_dst.write(data)
    
    print(f"Copied {len(data)} bytes")
    print(f"Destination exists: {os.path.exists(dst)}")
else:
    print("Source file not found!")
