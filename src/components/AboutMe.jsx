import React from "react";
import edis from "../assets/edis.jpg";


function AboutMe() {
  return (
    <>
    <div className="about-section-wrapper">
      <div className="about-section-title title">
        <h1>About Me</h1>
      </div>
        <div className="about-section-content">
          <div className="about-info">
            <p>
              I am a passionate and detail-oriented software developer with a strong focus on web development. With experience in front-end and back-end technologies, I specialize in building scalable, user-friendly, and efficient applications. My expertise includes JavaScript, React, .NET, C#, and database management, allowing me to develop full-stack solutions that meet modern industry standards.
            </p>
            <p>
              I have a background in informatics and computer science, and I am always eager to learn and adapt to new technologies. Whether it's optimizing performance, enhancing user experience, or solving complex problems, I strive to deliver high-quality code and innovative solutions.
            </p>
            <p>
              I am also experienced in working with RESTful APIs, cloud services, and modern development workflows, ensuring that the applications I build are both robust and maintainable. My goal is to continuously improve and contribute to impactful projects that make a difference.
            </p >
            <p>
              <span className="highlight">Let’s connect and create something amazing! 🚀</span> 
            </p>
          </div>
          <div className="about-image-container">
            <img src={edis} alt="edis" className="about-image"/>
          </div>
        </div>
    </div>
      

      
    </>
  );
}

export default AboutMe;
