function ThemeManager(storageKey) {
  this.storageKey = storageKey;
  this.defaultTheme = 'light';
  this.themes = {
    light: {
      name: 'Light',
      description: 'Classic light theme'
    },
    dark: {
      name: 'Dark',
      description: 'Dark mode for night time'
    },
    mint: {
      name: 'Mint',
      description: 'Fresh mint green theme'
    },
    bubblegum: {
      name: 'Bubblegum',
      description: 'Sweet pink & magenta theme'
    },
    galaxy: {
      name: 'Galaxy',
      description: 'Deep space purple & blue'
    },
    pastels: {
      name: 'Pastels',
      description: 'Soft pastel colors'
    },
    neon: {
      name: 'Neon',
      description: 'Dark with neon outlines'
    }
  };
  
  this.init();
}

ThemeManager.prototype.init = function() {
  var savedTheme = this.getSavedTheme();
  this.setTheme(savedTheme);
};

ThemeManager.prototype.getSavedTheme = function() {
  try {
    return localStorage.getItem(this.storageKey) || this.defaultTheme;
  } catch (e) {
    return this.defaultTheme;
  }
};

ThemeManager.prototype.saveTheme = function(theme) {
  try {
    localStorage.setItem(this.storageKey, theme);
  } catch (e) {
    // localStorage might be disabled
  }
};

ThemeManager.prototype.setTheme = function(theme) {
  if (!this.themes[theme]) {
    theme = this.defaultTheme;
  }
  
  document.body.setAttribute('data-theme', theme);
  this.saveTheme(theme);
  this.currentTheme = theme;
  
  // Trigger custom event for theme change
  var event = new Event('themeChange');
  document.dispatchEvent(event);
};

ThemeManager.prototype.getCurrentTheme = function() {
  return this.currentTheme || this.defaultTheme;
};

ThemeManager.prototype.getAllThemes = function() {
  return this.themes;
};
