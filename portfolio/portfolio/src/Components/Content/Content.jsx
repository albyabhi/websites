import React from 'react';
import './content.css';
import ProfileImage from '../Content/images/img.jpg';

const Content = () => {
  return (
    <div className="content-container">
      <div className="left-section">
        <div className="intro-text">
          <h2 className="greeting">Hi there!</h2>
          <h1 className="name">I am Alby A.B</h1>
          <h2 className="profession">I develop solid and responsive websites</h2>
        </div>
        <div className="description">
          <p>
            I specialize in creating high-performance websites using modern technologies like the MERN stack. I focus on delivering seamless user experiences and scalable web solutions.
          </p>
          <p>
            Whether you're looking for a portfolio, a business website, or an e-commerce platform, I provide customized solutions tailored to your needs. Let’s bring your vision to life.
          </p>
        </div>
      </div>
      <div className="right-section">
        <img src={ProfileImage} alt="Profile" className="profile-image"></img>
      </div>
    </div>
  );
};

export default Content;
