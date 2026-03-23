// Global App Utilities
const App = {
  formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
};

// Initialize Storage globally when loaded
document.addEventListener('DOMContentLoaded', () => {
  if (window.Storage) Storage.init();
});
