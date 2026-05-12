// Initialize theme manager
var themeManager = new ThemeManager('2048-theme');

// Handle theme selector changes
var themeSelect = document.getElementById('theme-select');
if (themeSelect) {
  themeSelect.value = themeManager.getCurrentTheme();
  themeSelect.addEventListener('change', function(e) {
    themeManager.setTheme(e.target.value);
  });
  
  // Update selector when theme changes programmatically
  document.addEventListener('themeChange', function() {
    themeSelect.value = themeManager.getCurrentTheme();
  });
}

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
