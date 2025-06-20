const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  // pastikan auth.json sudah tersedia di folder auth/
  const storage = JSON.parse(fs.readFileSync('auth/auth.json'));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: storage });
  const page = await context.newPage();

  await page.goto('https://preview.craft-world.gg', { waitUntil: 'load' });
  console.log('Bot siap, farming dimulai 🔁');

  while (true) {
    try {
      // klik semua tombol play
      const plays = await page.$$('button:has-text("▶")');
      for (const btn of plays) await btn.click();

      // klik boost jika tersedia
      const boost = await page.$('text="x2 Boost"');
      if (boost) await boost.click();

      console.log(`[${new Date().toISOString()}] Farming + boost (jika ada).`);
      await page.waitForTimeout(10000);
    } catch (e) {
      console.error('Error loop:', e);
      await page.waitForTimeout(5000);
    }
  }

  // browser.close();  // sengaja tidak ditutup agar berjalan terus
})();
