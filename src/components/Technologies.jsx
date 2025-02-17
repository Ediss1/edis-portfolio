import React from "react";
import Skill from "./Skill";
import skills from "../skills";

function Technologies() {
return(
    <>
    <div className="background">

    
    <div className="technologies-wrapper">
        <div className="technologies-title title">
            <h1>Skills & Technologies</h1>
        </div>
        <div className="technologies-content">
            <div className="marque-wrapper">
                <div className="marque-content">
                {skills.map((skill, index) => (
                        <Skill key={index} img={skill.img} skill={skill.skill} description={skill.description}/>
                ))}
                
                {skills.map((skill, index) => (
                        <Skill key={index} img={skill.img} skill={skill.skill} description={skill.description}/>
                ))}
                </div>
            </div>

        </div>
    </div>
    </div>
    </>
)
}

export default Technologies;