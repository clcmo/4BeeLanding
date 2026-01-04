// Accessibility Functions
let darkModeEnabled = false;
let highContrastEnabled = false;
let colorBlindMode = null;

function toggleAccessibilityMenu() {
  const dropdown = document.getElementById('accessibilityDropdown');
  dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  const dropdown = document.getElementById('accessibilityDropdown');
  const toggle = document.querySelector('.accessibility-toggle');
  const menu = document.querySelector('.accessibility-menu');

  if (!menu.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;
  updateAccessibilityClasses();
}

function toggleHighContrast() {
  highContrastEnabled = !highContrastEnabled;
  updateAccessibilityClasses();
}

function setColorBlindMode(mode) {
  colorBlindMode = (colorBlindMode === mode) ? null : mode;
  updateAccessibilityClasses();
}

function resetAccessibility() {
  darkModeEnabled = false;
  highContrastEnabled = false;
  colorBlindMode = null;
  updateAccessibilityClasses();
}

function updateAccessibilityClasses() {
  // Remove all classes
  document.body.classList.remove('dark-mode', 'high-contrast', 'deuteranopia', 'protanopia', 'tritanopia');

  // Add active classes
  if (darkModeEnabled) document.body.classList.add('dark-mode');
  if (highContrastEnabled) document.body.classList.add('high-contrast');
  if (colorBlindMode) document.body.classList.add(colorBlindMode);

  // Update button states
  updateButtonStates();
}

function updateButtonStates() {
  const buttons = document.querySelectorAll('.accessibility-dropdown button');
  buttons.forEach(btn => btn.classList.remove('active'));

  if (darkModeEnabled) {
    buttons[0].classList.add('active');
  }
  if (highContrastEnabled) {
    buttons[1].classList.add('active');
  }
  if (colorBlindMode === 'deuteranopia') {
    buttons[2].classList.add('active');
  }
  if (colorBlindMode === 'protanopia') {
    buttons[3].classList.add('active');
  }
  if (colorBlindMode === 'tritanopia') {
    buttons[4].classList.add('active');
  }
}