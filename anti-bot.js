(function () {
  const ua = navigator.userAgent.toLowerCase();

  const blockedKeywords = [
    "facebookexternalhit",
    "facebot",
    "twitterbot",
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "bot",
    "crawler",
    "spider",
    "headless",
    "puppeteer",
    "selenium"
  ];

  const isBot = blockedKeywords.some(k => ua.includes(k));

  if (isBot) {
    document.body.innerHTML = `
      <div style="font-family:Arial;text-align:center;margin-top:50px">
        <h2>Access denied</h2>
      </div>
    `;
    window.stop();
  }
})();
