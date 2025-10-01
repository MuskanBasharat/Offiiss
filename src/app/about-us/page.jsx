'use client';
// app/AboutUs/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import Popup from '../components/Popup'; // Adjust path as needed
import { useState } from "react";
import ScrollToTop from '../components/scrollToTop'

export default function AboutUs() {

  return (
    <>
     <Navbar />
    
    <div className="body-about">

        
        {/* Hero Section */}
        <AboutHero />
        <ScrollToTop />
        {/* What We Do Section */}
        <WhatWeDo />
        
        {/* Our Story Section */}
        <OurStory />
           
        {/* Contact Section */}
        <ContactUs />

        {/* Driver Section */}
        <CertifiedProfessionals />
     
        
       
      </div>
     <Footer />
    </>
  );
}



// About Hero Component
const AboutHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 max-w-7xl mx-auto hero-section">
      <div className="text-center text-hero">
        <h1 className="head1-hero">
       <span className="black-hero">We pride in making the Logistics industry</span> <span className="gray-hero">in Ghana and beyond Seamless</span> 
      </h1>
        <p className="text-p-hero">
          Seamlessly connect with trusted clearing agents and truck drivers across Ghana&apos;s major ports and airports
        </p>
      </div>

      <div className="flex justify-center hero-img">
      </div>
    </section>
  );
};

// What We Do Component
const WhatWeDo = () => {
  return (
    <section className="px-4 max-w-7xl mx-auto what-section">
      <div className="what-container">
        <div className="what-text-section">
          <h2 className="text-4xl font-bold text-[#051222] mb-6 what-about">Our Story</h2>
          <div className="what-text" >
            <p >
              Offiiss was born from a deeply personal experience — one that many importers know all too well. 
              In 2021, while trying to clear a shipped car from Canada to Ghana for the first time, our founder 
              after days of calling friends and acquaintances to find clearing agents faced what many fear: an 
              unreliable clearing agent who kept demanding more money, spinning stories, and leaving the process 
              clouded in uncertainty and stress. What should&apos;ve been a straightforward transaction turned 
              into a frustrating ordeal — and a wake-up call.
            </p>
            <p><br/></p>
            <p>
              That experience sparked a mission: to bring trust, transparency, and technology to Ghana&apos;s 
              logistics space. Offiiss was created to make it easy, affordable, and efficient for importers, 
              clearing agents, and truck drivers to connect and work together — without the chaos, middlemen, 
              or unfair charges.
            </p>
          </div>
        </div>
        
        <div className="mt-10 flex justify-center  what-img">
        </div>
      </div>
    </section>
  );
};

// Our Story Component
const OurStory = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto what-section">
      <div className="what-container">
        <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1 what-img-2">
        </div>
        
        <div className="order-1 md:order-2 what-text-section">
          <h2 className="text-4xl font-bold text-[#051222] mb-6 what-about">What we do</h2>
          <div className="what-text">
            <p>
              <strong>We are building Ghana&apos;s trusted logistics marketplace app, where:</strong><br />
              • Importers can digitally hire professional agents and vetted drivers<br />
              • Agents and drivers can grow their services and reputation<br />
              • Everyone benefits from secure payments, automated workflows, and real-time ratings
            </p>
            <p>
              Offiiss is currently in its beta phase, actively engaging users to refine what works best. 
              The platform offers separate dashboards for users and service providers, ensuring everyone 
              has a tailored experience built around their specific needs.
            </p>
            <p>
              <strong>Our values</strong> — trust, efficiency, passion and enthusiasm, and fairness — 
              are at the heart of everything we do. Backed by the power of tech, we&apos;re not just 
              solving a local logistics problem — we&apos;re laying the foundation to simplify freight across Africa.
            </p>
            <p>
              Join us on this journey to reshape how logistics works — one booking at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


// Contact Us Component
const ContactUs = () => {
  const featureItems = [
    {
      title: "Our Email",
      content:"info@offiiss.com",
      image: "https://framerusercontent.com/images/3UVXYH1EdmUpBSVSme1GAc1X4L0.png?scale-down-to=512",
    },
    {
      title: "Our Phone Number",
      content:"+233 551 643 3306",
      image: "https://framerusercontent.com/images/3UVXYH1EdmUpBSVSme1GAc1X4L0.png?scale-down-to=512",
    },
    {
      title: "Office Address",
      content:"North Legon, Accra Ghana",
      image: "https://framerusercontent.com/images/olDuEi5gG1rFBCFY2CHpZKA.png?scale-down-to=512",
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-head">Want to connect? Contact Us</h2>
        
        <div  className="cards-container">
        {featureItems.map((item, idx) => (
          <div key={idx} className="card-contact">
            <div className="card-image">
            <img src={item.image} alt={item.title} className="img-contact" />
            </div>
            <div className="card-text">
            <h3 className="contact-title">{item.title}</h3>
            <p className="contact-content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};






// Driver Section Component


const CertifiedProfessionals = () => {
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
    <section className="relative w-full last-section-about">
      <div className="relative mx-auto">
        
        {/* Background Images with Gradient Overlay */}
        <div className="relative w-full h-[870px] overflow-hidden">
          {/* Primary Background Image */}
          <div className="absolute inset-0 w-full h-full bg-img">
          </div>
          
         
          {/* Dot Pattern Overlay */}
          <div className="absolute inset-0 w-full h-full doted-bg">
            <img
              src="https://framerusercontent.com/images/AH04BOzihZM4r0RiR32r0ppC4.svg"
              alt="Dot Grid Pattern"
              fill
              className="object-contain object-center mix-blend-overlay"
            />
          </div>
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex items-end justify-start div-last ">
          <div className="text-white z-10 container-last">
            <div className="last-text" >
              <h2 className="last-texts head-last">
                Access Certified Professionals:
              </h2>
              <p className="last-texts p-last">
                Connect with verified clearing agents and truck drivers at Tema Seaport, 
                Takoradi Seaport, and Kotoka International Airport.
              </p>
            </div>

            <div className="btns-container">
              <button className="btns-1"     
                 onClick={() => setIsPopup1Open(true)}
>
                Get Offiiss App
              </button>
              <button className="btns-2"
                      onClick={() => setIsPopup2Open(true)}
>
                Get Offiiss Freighter
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
        </div>

      </div>
    </section>
  );
};



