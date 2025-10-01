"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import Logo from "./Logo";
import Popup from './Popup'; // Adjust path as needed


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (isAnimating) return; // Prevent rapid clicks during animation
    
    setIsAnimating(true);
    
    if (!isOpen) {
      // Opening animation
      setIsOpen(true);
      setTimeout(() => setIsAnimating(false), 500); // Match CSS transition duration
    } else {
      // Closing animation
      setIsOpen(false);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const closeMenu = () => {
    if (isOpen && !isAnimating) {
      setIsAnimating(true);
      setIsOpen(false);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const isActive = (href) => (pathname === href ? "active" : "");

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [isOpen]);

  // Close menu when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('mobile-menu-backdrop')) {
      closeMenu();
    }
  };
 const [isPopup1Open, setIsPopup1Open] = useState(false);
  
   const button1Links = {
    appStore: "https://apps.apple.com/dk/app/offiiss/id6446071887",
    playStore: "https://play.google.com/store/apps/details?id=com.offiiss.offiiss"
  };
  return (
    <>
      <div className="header">
        <nav className="header-navbar">
          <div className="logo">
            <Logo width={120} height={40} />
          </div>

          {/* Desktop links */}
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className={`links ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/about-us" className={`links ${isActive("/AboutUs")}`}>
              About Us
            </Link>
          </div>

          <div className="hidden md:block">
            <button 
        className="main-btn" 
        onClick={() => setIsPopup1Open(true)}
      >Get Offiiss App</button>
      <Popup 
        isOpen={isPopup1Open} 
        onClose={() => setIsPopup1Open(false)}
        appStoreLink={button1Links.appStore}
        playStoreLink={button1Links.playStore}
        heading="Get Offiiss App"

      />
          </div>
          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`menu-btn ${isOpen ? 'active' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              disabled={isAnimating}
            >
              {/* Hamburger Icon */}
              <svg
                className="hamburger"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M3 7h24v2H3zM3 14h24v2H3zM3 21h24v2H3z"></path>
              </svg>
              
              {/* Cross Icon */}
              <svg
                className="cross"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Container */}
        <div className="mobile-menu-container">
          {/* Mobile Menu Backdrop */}
          <div 
            className={`mobile-menu-backdrop ${isOpen ? 'open' : ''}`}
            onClick={handleBackdropClick}
          />
          
          {/* Mobile Menu */}
          <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <Link
              href="/"
              className={`links ${isActive("/")}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`links ${isActive("/AboutUs")}`}
              onClick={closeMenu}
            >
              About Us
            </Link>
           <button 
        className="main-btn" 
        onClick={() => setIsPopup1Open(true)}
      >
              Get Offiiss App
            </button>
            
          </nav>
          <Popup 
        isOpen={isPopup1Open} 
        onClose={() => {setIsPopup1Open(false); closeMenu();
  }}
        appStoreLink={button1Links.appStore}
        playStoreLink={button1Links.playStore}
        heading="Get Offiiss App"

      />
        </div>
      </div>
    </>
  );
}