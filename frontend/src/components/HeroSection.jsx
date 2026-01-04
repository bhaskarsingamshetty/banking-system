import React from 'react';
import './HeroSection.css'; 
import heroVideo from '../assets/herovideo2.mp4';

function HeroSection({ serviceRef }) {
 const handleClick = () => {
    serviceRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return (
    <div className="hero-container">
      <video
        autoPlay // Start playing automatically
        loop // Loop the video
        muted // Mute the video (often required for autoplay)
        playsInline // Important for iOS playback
        className="hero-video-background"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag. {/* Fallback text */}
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content (ensure this is after the video/overlay) */}
      <div className="hero-content">
        <h1>Welcome to Trust One Bank</h1>
        <p>Secure, simple banking designed for you.</p>
        <button className="hero-button" onClick={handleClick}>
          Explore Services
        </button>
      </div>
    </div>
  );
}

export default HeroSection;