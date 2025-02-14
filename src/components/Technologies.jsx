import React from "react";
import Skill from "./Skill";
import skills from "../skills";

function Technologies() {
return(
    <>
    <div className="technologies-wrapper">
        <div className="technologies-heading">
            <h1 className="heading">Skills Overview</h1>
        </div>
        <div className="technologies-content">
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

        </div>
    </div>
    </>
)
}

export default Technologies;