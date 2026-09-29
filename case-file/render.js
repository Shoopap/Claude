const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  for (const [src, out] of [['case.html', 'Neuro-Lockdown-Case-File.pdf'], ['answers.html', 'Neuro-Lockdown-Answer-Key.pdf']]) {
    await p.goto('file://' + __dirname + '/' + src); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
    await p.pdf({ path: __dirname + '/' + out, printBackground: true, preferCSSPageSize: true });
    console.log(src, await p.evaluate(() => [...document.querySelectorAll('.page')].map((pg, i) => { const r = pg.getBoundingClientRect(); return (i + 1) + ':' + [...pg.querySelectorAll('*')].filter(e => { const q = e.getBoundingClientRect(); return q.height > 0 && q.bottom > r.bottom - 22 && !e.closest('.foot'); }).length; }).join(' ')));
  }
  await b.close();
})();
