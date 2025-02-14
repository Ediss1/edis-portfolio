import React from "react";

function Heading(){
    return(
        <>
        <div className="first">
            <div className="name">
                <h1>Hi I'm Edis,</h1>
                <h1><span className="highlight">Full stack web developer</span></h1>
            </div>
            <h2>Based in Tuzla, Bosnia and Herzegovina</h2>
            <h2>Specialized in <span className="highlight" >Full stack web development</span></h2>
            <button class="button-64" role="button"><span class="text">Contact Me</span></button>
        </div>

        </>
    );
}

export default Heading;