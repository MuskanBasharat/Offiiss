
'use client'


import './Hero.css';
import Popup from './Popup'; // Adjust path as needed
import { useState } from 'react';
  
export default function Hero() {
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);
  
   const button1Links = {
    appStore: "https://apps.apple.com/dk/app/offiiss/id6446071887",
    playStore: "https://play.google.com/store/apps/details?id=com.offiiss.offiiss"
  };

  const button2Links = {
    appStore: "https://apps.apple.com/dk/app/offiiss-agents-drivers/id6744938868", 
    playStore: "https://play.google.com/store/apps/details?id=com.offiiss.provider"
  };
  return (

    <section className="hero-section">
      <div className='hero'>
      <h1 className="head1">
       <span className="black">Book Trusted Clearing Agents &</span> <span className="gray">Truck Drivers in Seconds</span> 
      </h1>
      <p className="text-p">
        Your goods, our mission — from port to your door, Offiiss streamlines every step.
      </p>
    
      <div className="mt-8 flex justify-center button-container">
 <button 
        className="button-1" 
        onClick={() => setIsPopup1Open(true)}
      >
           Get Offiiss App
      </button>
      
 <button 
        className="button-2" 
        onClick={() => setIsPopup2Open(true)}
        
      >          Get Offiiss Freighter
        </button>
         <Popup 
        isOpen={isPopup1Open} 
        onClose={() => setIsPopup1Open(false)}
        appStoreLink={button1Links.appStore}
        playStoreLink={button1Links.playStore}
      />

      <Popup 
        isOpen={isPopup2Open} 
        onClose={() => setIsPopup2Open(false)}
        appStoreLink={button2Links.appStore}
        playStoreLink={button2Links.playStore}
      />
      </div>
      </div>
    </section>
  );
}
