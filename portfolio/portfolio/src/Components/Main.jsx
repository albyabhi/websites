import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import './main.css'; // Import CSS
import Skill from './Skill/Skill';

const Main = () => {
    const [selectedSection, setSelectedSection] = useState('about');
    const handleSelectSection = (section) => {
        setSelectedSection(section);
      };
      return (
        <div className="main-container">
          <div className="sidebar">
            <Sidebar onSelect={handleSelectSection} />
          </div>
          <div className="content">
        {selectedSection === 'about' && <Content />}
        {selectedSection === 'skill' && <Skill />}
        {/* You can add more conditions here for other sections like 'works', 'resume', etc. */}
      </div>
        </div>
      );
    };

export default Main;
