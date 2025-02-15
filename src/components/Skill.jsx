import React from "react";


function Skill(props){
    return (
        <>
        <div className="skill-card">
                <img src={props.img} alt="icon" />
                <h3>{props.skill}</h3>
                <div className="text">
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )

}

export default Skill;