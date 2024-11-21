import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = ({ onSelect }) => {
  const [selected, setSelected] = useState('about');

  const handleSelect = (section) => {
    setSelected(section);
    onSelect(section);
  };

  return (
    <div className="sidebar">
      <div className="sideHead">
        <h1>Alby abhi</h1>
        <h2>Developer</h2>
      </div>
      <button 
        className={`sidebar-btn ${selected === 'about' ? 'selected' : ''}`} 
        onClick={() => handleSelect('about')}>
        About
      </button>
      <button 
        className={`sidebar-btn ${selected === 'skill' ? 'selected' : ''}`} 
        onClick={() => handleSelect('skill')}>
        Skill
      </button>
      <button 
        className={`sidebar-btn ${selected === 'works' ? 'selected' : ''}`} 
        onClick={() => handleSelect('works')}>
        Works
      </button>
      <button 
        className={`sidebar-btn ${selected === 'resume' ? 'selected' : ''}`} 
        onClick={() => handleSelect('resume')}>
        Resume
      </button>
      <button 
        className={`sidebar-btn ${selected === 'contact' ? 'selected' : ''}`} 
        onClick={() => handleSelect('contact')}>
        Contact
      </button>
    </div>
  );
};

export default Sidebar;
