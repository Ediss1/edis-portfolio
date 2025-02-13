import React from "react";
import Skill from "./Skill";
import skills from "../skills";

function AboutMe() {
  return (
    <>
      <h1 className="heading">Info</h1>
      <p>
        I’m a second-year student at the International Business-Information Academy in Tuzla. My major is Computer Science. 
        Until now, I have put a lot of effort into almost every part of IT, and I am still craving knowledge. Now, more than 
        ever, I want to leave a mark. I am a very pleasant and friendly person, and I love working in groups. My main focus 
        is on programming and solving new problems because I find it the most interesting.
      </p>

      <h1 className="heading">Skills Overview</h1>
      <div className="marque-wrapper">
        <div className="marque-content">
          {skills.map((skill, index) => (
                <Skill key={index} img={skill.img} skill={skill.skill}/>
          ))}
        </div>
        <div className="marque-content">
          {skills.map((skill, index) => (
                <Skill key={index} img={skill.img} skill={skill.skill}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
