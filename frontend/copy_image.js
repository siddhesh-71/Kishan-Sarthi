const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\0b945e68-8c0d-4a9f-99e6-ae151786a75c\\friendly_farmer_support_1766757480209.png';
const dest = 'c:\\Users\\Asus\\Desktop\\kishan_sarthi\\frontend\\assets\\hero-friendly.png';

fs.copyFile(src, dest, (err) => {
    if (err) {
        console.error('Error copying file:', err);
        process.exit(1);
    } else {
        console.log('File copied successfully!');
    }
});
