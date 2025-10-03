import React from 'react';
import "./TrustedBy.css";

export default function TrustedBy () {
 return (
    <div className="partners-section">
      <div className="partners-container">
        <div className="text-content">
          <h1 className="title">Trusted by industry leaders</h1>
          <p className="description">
            We are trusted and accredited by the Ghana Revenue Authority, the Ghana Ports and Harbours Authority, 
            the Importers and Exporters Association of Ghana, and the Ghana Shippers Authority.
          </p>
        </div>
        
        <div className="logos-grid">
          {/* Top row - Wide logo */}
          <div className="logo-item wide-logo">
            <img 
              src="https://raw.githubusercontent.com/MuskanBasharat/asstes_offiiss/6c91ffd7e22905ed597b0946999f70548265560a/logo1.webp" 
              alt="IMPORTERS & EXPORTERS ASSOCIATION OF GHANA" 
              className="logo-img"
            />
          </div>
          
          {/* Middle row - Two square logos */}
          <div className="logo-item square-logo images-container">
            <img 
              src="https://raw.githubusercontent.com/MuskanBasharat/asstes_offiiss/6c91ffd7e22905ed597b0946999f70548265560a/logo2.avif" 
              alt="SHIP" 
              className="logo-img"
            />
            <img 
              src="https://raw.githubusercontent.com/MuskanBasharat/asstes_offiiss/6c91ffd7e22905ed597b0946999f70548265560a/logo3.webp" 
              alt="TITOR" 
              className="logo-img"
            />
          </div>
          
          {/* Bottom row - Single square logo */}
          <div className="logo-item square-logo">
            <img 
              src="https://raw.githubusercontent.com/MuskanBasharat/asstes_offiiss/6c91ffd7e22905ed597b0946999f70548265560a/logo4.avif" 
              alt="HIGHER" 
              className="logo-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
