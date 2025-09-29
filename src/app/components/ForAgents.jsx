'use client';
import { useState } from 'react';
import React from 'react'
import Popup from './Popup'; // Adjust path as needed

import './ForImporters.css';
export const ForAgents = () => {
   const [isPopup1Open, setIsPopup1Open] = useState(false);
    
     const button1Links = {
      appStore: "https://apps.apple.com/dk/app/offiiss-agents-drivers/id6744938868",
      playStore: "https://play.google.com/store/apps/details?id=com.offiiss.provider"
    };
  return (
    <section className="py-20 second-divider divider">
        <div className='second-container'>
        <div className="mt-10 flex justify-center image-agent">
        </div>
      <div className="max-w-5xl mx-auto textmain">
        <h3 className="h3-header text-white">For Clearing Agents

</h3>
        <div className="text-main">
          <h3 className="text-2xl text-white font-bold h3-head">Increase Visibility

</h3>

         <p className=" text-xl text-gray-400 text-para">Get listed and let shippers find you.
          <br/>
          Offiiss markets you—you focus on serving.

 </p>
               <h3 className="text-2xl text-white font-bold h3-head">Brand Yourself. Stand Out

</h3>
                <p className=" text-xl text-gray-400 text-para">Reviews, photos, professionalism…

<br/> Agents no longer compete on price alone.

</p>
                <h3 className="text-2xl text-white font-bold h3-head">Work More, Earn more

</h3>
                <p className=" text-xl text-gray-400 text-para">The right clients, directly to you.

One account. No hustle.</p>
            <button className="main-btns" onClick={() => setIsPopup1Open(true)} >Become an Agent</button>

               <Popup 
        isOpen={isPopup1Open} 
        onClose={() => setIsPopup1Open(false)}
        appStoreLink={button1Links.appStore}
        playStoreLink={button1Links.playStore}
      />
        </div>
        
      </div>
      </div>
      
    </section>
  );
}
