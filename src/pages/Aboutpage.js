import React from 'react'
import './AboutMe.css';


function Aboutpage() {
  return (
    <div className="about-container">
    <h1>About Me</h1>

<div className="about-content">
  <div className="about-section">
    <h2>Personal Details</h2>
    <p><strong>Name:</strong> Suresh Jadhav</p>
    <p><strong>Gender:</strong> Male</p>
    <p><strong>Height:</strong> 5'7"</p>
    <p><strong>Marital Status:</strong> Single</p>
    <p><strong>Date of Birth:</strong> May 28, 2001</p>

    <div className="about-section">
    <h2>Languages</h2>
    <p>Proficient in English, Kannada, Hindi, and Telugu.</p>
  </div>
  </div>
  <div className="about-section">
    <h2>Contact Me</h2>
    <p><strong>PHONE:</strong> 9945950995</p>
    <p><strong>E-Mail:</strong>sureshjadhav2831@gmail.com</p>

      <div className="about-section">
      <h2>Hobbies & Interests</h2>
      <p>Watching movies, cooking, reading philosophical books, playing video games, and researching interesting topics.</p>
    </div>
  </div>

  <div className="about-section">
    <h2>Address</h2>
    <p><strong>Permanent Address:</strong> Vantichinta, Post: Venkatapur, Taluk: Chincholi, District: Kalaburgi, Postal Code: 585305</p>
    <p><strong>Current Address:</strong> LIG1, Block 1, Phase 1, Suryanagar, Chandapura, Bangalore, 560081</p>
  </div>

  <div className="about-section">
    <h2>Education Background</h2>
    <p><strong>School:</strong> Government Higher School, Kunchawaram, completed up to 10th standard with 69%</p>
    <p><strong>PUC:</strong> Karnataka PUC Science College, Bidar (2017-2019) with 60%</p>
    <p><strong>Graduation:</strong> Bachelor of Computer Application (BCA) from SunSoft Degree College, Bidar (2020-2023) with 8.1 CGPA</p>
  </div>

  


</div>
</div>
);
};

export default Aboutpage;