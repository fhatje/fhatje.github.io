// Runs before the first paint (the stylesheet-blocking position in <head>): a theme chosen on the
// other page arrives as ?theme=…, and applying it only once the module has loaded shows as a flash.
(function () {
  var theme = new URLSearchParams(location.search).get('theme');
  if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;
})();
