// Handles persistent storage with in-memory fallback
const Storage = {
  data: null,
  
  init() {
    try {
      const stored = localStorage.getItem('gymAppData');
      if (stored) {
        this.data = JSON.parse(stored);
      } else {
        // Fallback to initial data from data.js
        this.data = JSON.parse(JSON.stringify(window.initialData));
        this.save();
      }
    } catch (e) {
      console.warn("localStorage failed, using in-memory data", e);
      this.data = JSON.parse(JSON.stringify(window.initialData || {}));
    }
  },
  
  save() {
    try {
      localStorage.setItem('gymAppData', JSON.stringify(this.data));
    } catch (e) {
      console.warn("Failed to save to localStorage", e);
    }
  },
  
  get() {
    if (!this.data) this.init();
    return this.data;
  }
};
