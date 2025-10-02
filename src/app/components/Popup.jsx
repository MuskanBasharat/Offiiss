'use client';

import { useEffect } from 'react';
import './Popup.css';

// SVG Icons
const GooglePlayIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path fill="white" d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"></path>
</svg>
);

const AppStoreIcon = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.05 12.04C17.02 9.28 19.36 8.05 19.44 8C18.27 6.33 16.47 6.07 15.94 6.04C14.3 5.87 12.73 6.99 11.96 6.99C11.19 6.99 9.91 6.06 8.57 6.09C6.74 6.12 5.06 7.07 4.17 8.67C2.35 11.65 3.66 16.18 5.46 18.77C6.33 20.03 7.35 21.43 8.62 21.38C9.87 21.33 10.33 20.58 11.86 20.58C13.39 20.58 13.82 21.38 15.13 21.35C16.44 21.33 17.35 20.09 18.2 18.82C19.21 17.37 19.65 15.96 19.67 15.9C19.63 15.89 17.08 14.96 17.05 12.04Z" fill="white"/>
    <path d="M14.82 4.5C15.41 3.75 15.84 2.72 15.72 1.75C14.84 1.78 13.77 2.33 13.14 3.08C12.58 3.74 12.06 4.79 12.19 5.73C13.16 5.8 14.17 5.22 14.82 4.5Z" fill="white"/>
</svg>

);

const Popup = ({ isOpen, onClose, appStoreLink, playStoreLink, heading = "Get this App" }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAppStore = () => {
    window.open(appStoreLink, '_blank');
  };

  const handlePlayStore = () => {
    window.open(playStoreLink, '_blank');
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{heading}</h2>
        <div className="download-options">
            {/* App Store Button */}
          <button className="store-button" onClick={handleAppStore}>
            <div className="store-button-content" onClick={onClose}>
              <span className="store-button-platform">App Store</span>
            </div>
            <div className="store-button-icon">
              <AppStoreIcon />
            </div>
          </button>
          {/* Google Play Button */}
          <button className="store-button" onClick={handlePlayStore}>
            <div className="store-button-content" onClick={onClose}>
              <span className="store-button-platform">Google Play</span>
            </div>
            <div className="store-button-icon">
              <GooglePlayIcon />
            </div>
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Popup;