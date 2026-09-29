const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + __dirname + '/kit.html'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  await p.pdf({ path: __dirname + '/Neuro-Lockdown-Print-Kit.pdf', format: 'Letter', printBackground: true, preferCSSPageSize: true });
  // overflow check: any page whose content exceeds its box
  console.log(await p.evaluate(() => [...document.querySelectorAll('.page')].map((pg, i) => { const r = pg.getBoundingClientRect(); const over = [...pg.querySelectorAll('*')].filter(e => { const q = e.getBoundingClientRect(); return q.bottom > r.bottom - 20 && !e.closest('.foot') && q.height > 0; }).length; return (i+1) + ':' + over; }).join(' ')));
  await b.close();
})();
