import React from "react";
import "./App.css";
import profile from "./profile.jpg";

function App() {
  return (
    <div className="container">
      <div className="resume">
        
        <div className="left">
          <img src={profile} alt="profile" className="profile-img" />
          <h2>Dilip Kumar</h2>
          <p>📞 9625838109</p>
          <p>📧 dilipkumar91381@gmail.com</p>

          <div className="section">
            <h3>Skills</h3>
            <ul>
              <li>React JS</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="section">
            <h3>Profile</h3>
            <p>
              I am a passionate web developer with knowledge of React, MERN stack,
              and building modern web applications.
            </p>
          </div>

          <div className="section">
            <h3>Projects</h3>
            <ul>
              <li>Student Management System (MERN)</li>
              <li>Portfolio Website using React</li>
              <li>Resume Builder App</li>
            </ul>
          </div>

          <div className="section">
            <h3>Education</h3>
            <p>Bachelor's Degree (GNC(AKTU))</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;