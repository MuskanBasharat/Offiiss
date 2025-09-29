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
              src="https://framerusercontent.com/images/nG4W6yWyR53jOkK5OZcmxpY.png" 
              alt="IMPORTERS & EXPORTERS ASSOCIATION OF GHANA" 
              className="logo-img"
            />
          </div>
          
          {/* Middle row - Two square logos */}
          <div className="logo-item square-logo images-container">
            <img 
              src="https://framerusercontent.com/images/6SneBJ4F0sa3h95SglRMeLaMc.png" 
              alt="SHIP" 
              className="logo-img"
            />
            <img 
              src="https://framerusercontent.com/images/sDkKHMfJuYfaaFxAuerpxywFMk.png" 
              alt="TITOR" 
              className="logo-img"
            />
          </div>
          
          {/* Bottom row - Single square logo */}
          <div className="logo-item square-logo">
            <img 
              src="https://framerusercontent.com/images/dxqTFCfL3VW1PqPXdvYVNjjwFY.png" 
              alt="HIGHER" 
              className="logo-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
