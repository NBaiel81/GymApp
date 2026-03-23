// Reusable UI components
const UI = {
  renderBottomNav(activePage) {
    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';
    nav.innerHTML = `
      <a href="index.html" class="nav-item ${activePage === 'main' ? 'active' : ''}">
        <svg class="nav-icon" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        Home
      </a>
      <a href="plans.html" class="nav-item ${activePage === 'plans' ? 'active' : ''}">
        <svg class="nav-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg>
        Plans
      </a>
      <a href="calendar.html" class="nav-item ${activePage === 'calendar' ? 'active' : ''}">
        <svg class="nav-icon" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
        Schedule
      </a>
      <a href="progress.html" class="nav-item ${activePage === 'progress' ? 'active' : ''}">
        <svg class="nav-icon" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
        Progress
      </a>
    `;
    
    const container = document.getElementById('app-container');
    if (container) {
      // remove old nav if exists
      const oldNav = container.querySelector('.bottom-nav');
      if(oldNav) oldNav.remove();
      container.appendChild(nav);
    }
  },
  
  toast(message) {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
      background: var(--accent-green); color: black; padding: 12px 24px;
      border-radius: 20px; font-weight: bold; z-index: 1000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5); font-size: 14px;
      opacity: 0; transition: opacity 0.3s;
    `;
    el.innerText = message;
    
    const container = document.getElementById('app-container');
    if (container) container.appendChild(el);
    else document.body.appendChild(el);
    
    setTimeout(() => el.style.opacity = '1', 10);
    setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 300);
    }, 3000);
  }
};
