import React from 'react';
import './Card.css';

const Card = ({ title }) => {
  const handleClick = (event) => {
    const button = event.currentTarget;
    window.gsap.to(button, {
      duration: 0.3,
      scale: 0.95,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });
  };

  return (
    <div className="box" data-aos={title === "FARMER" ? "fade-right" : "fade-left"}>
      <h2>{title}</h2>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default Card;
