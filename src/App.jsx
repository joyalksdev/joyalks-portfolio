import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

// DevTools Detection Component
function DevToolsProtection() {
  useEffect(() => {
    // Console message
    console.clear();
    console.log('%cConsole was cleared.', 'color: #71717a; font-size: 12px;');
    console.log('%cBUILT BY JOYAL K.S.', 'color: #6366f1; font-size: 16px; font-weight: bold;');
    console.log('%cStealing code is not cool! If you wanna learn, ask me from the contact page 😊', 'color: #f59e0b; font-size: 14px;');
    console.log('%c→ https://joyalks.dev/contact', 'color: #6366f1; font-size: 14px; text-decoration: underline;');

    // Only enable DevTools detection on desktop (not mobile)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return; // Skip DevTools detection on mobile devices

    // Check if already redirected (prevent loop)
    const isBlocked = sessionStorage.getItem('devtools-blocked');
    if (isBlocked === 'true') return;

    // DevTools detection (desktop only)
    let devtoolsOpen = false;
    const threshold = 160;

    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      if ((widthThreshold || heightThreshold) && !devtoolsOpen) {
        devtoolsOpen = true;
        sessionStorage.setItem('devtools-blocked', 'true');
        // Redirect to blocked page
        window.location.href = '/devtools-blocked.html';
      }
    };

    // Check on resize
    window.addEventListener('resize', detectDevTools);

    // Initial check after small delay
    const initialCheck = setTimeout(detectDevTools, 500);

    // Periodic check
    const interval = setInterval(detectDevTools, 2000);

    // Disable right-click (desktop only)
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts (desktop only)
    const handleKeyDown = (e) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+J
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }
      // Ctrl+U (view source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }
      // Ctrl+S (save)
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Disable text selection and copy (desktop only)
    const disableSelect = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('selectstart', disableSelect);
    document.addEventListener('copy', disableSelect);

    return () => {
      window.removeEventListener('resize', detectDevTools);
      clearTimeout(initialCheck);
      clearInterval(interval);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', disableSelect);
      document.removeEventListener('copy', disableSelect);
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* <DevToolsProtection /> */}
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
