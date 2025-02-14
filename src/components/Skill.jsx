import React from "react";


function Skill(props){
    return (
        <>
        <div className="skill-card">
                <img src={props.img} alt="icon" />
                <p>{props.skill}</p>
                <p>{props.description}</p>
            </div>
        </>
    )

}

export default Skill;