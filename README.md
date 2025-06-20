 CraftWorld AutoBot

Bot otomatis yang menggunakan Playwright untuk farming & boost di game Craft World (`preview.craft-world.gg`).

## 🚀 Setup 

1. Install Node + Playwright:
   ```bash
   sudo apt update && sudo apt install -y nodejs npm
   npm install -g playwright
   npm install
   playwright install
   
2. Login pertama:

       npx playwright codegen https://preview.craft-world.gg

Login manual via Google + wallet hingga berhasil. Hasil login akan disimpan otomatis di folder auth/auth.json.

3.	Pastikan auth/auth.json dibuat.
4.	Jalankan bot
 
        node bot.js

6. Buat auto-restart:
   
       npm install -g pm2
       pm2 start bot.js --name craftworld
       pm2 save
       pm2 startup




⚙️ Opsi Tambahan
	•	Tambahkan log level, delay berbeda, notifikasi Telegram, dll.


🔄 Update Bot

Cukup pull repo lalu restart:

    git pull origin main && pm2 restart craftworld
