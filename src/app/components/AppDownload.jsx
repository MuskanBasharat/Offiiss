'use client'


import './ForImporters.css';
import Popup from './Popup'; // Adjust path as needed
import { useState } from 'react';

export default function AppDownload() {
   const img= "https://framerusercontent.com/images/U38LIqqmn2QEpdKWmqrLnTCcSM.png?scale-down-to=2048";
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
      <div className="showcase-container divider">
      {/* Main container */}
      <div className="main-content">
        
        {/* Image section with overlapping layers */}
        <div className="image-section">
          <div className="image-stack">
            <div className="image-layer shadow-layer">
              <img 
                src="https://framerusercontent.com/images/kZRJyMBLs98fQGurqwztxYERsyU.png" 
                alt="Phone shadow"
              />
            </div>
            <div className="image-layer main-layer">
              <img 
                src="https://framerusercontent.com/images/61VB5LG4ATIkdpL08GusBbP5I.png" 
                alt="Phone frame"
              />
            </div>
            <div className="image-layer screen-layer">
              <img 
                src="https://framerusercontent.com/images/U38LIqqmn2QEpdKWmqrLnTCcSM.png" 
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
        
        {/* Text content section */}
        <div className="text-section">
          <h3 className="h3-header text-white">Get the App Now</h3>
          
              <h3 className="text-2xl text-white font-bold h3-head">Offiiss App: For Importer</h3>
              <p className="text-xl text-gray-400 text-para">Available for iOS and Android</p>
            
              <h3 className="text-2xl text-white font-bold h3-head">Offiiss Freighter App: For Clearing Agents and Truck Drivers</h3>
              <p className="text-xl text-gray-400 text-para">Available for iOS and Android</p>

          <div className="buttons-container">
                        <button className="but-1 butt" onClick={() => setIsPopup1Open(true)} >Get Offiiss App</button>
                        <button className="but-2 butt" onClick={() => setIsPopup2Open(true)}>Get Offiiss Frieghter</button>
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
      </div>
    </div>
  );
};