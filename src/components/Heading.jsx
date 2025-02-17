import React from "react";

function Heading(){
    return(
        <>
        <div className="background">
            <div className="heading-wrapper">
                <div className="heading-container">
                    <div className="heading-name">
                        <h1>Hi I'm Edis,</h1>
                        <h1><span className="highlight">Full stack web developer</span></h1>
                    </div>
                    <div className="heading-location">
                        <h2>Based in Tuzla, Bosnia and Herzegovina</h2>
                        <h2>Specialized in <span className="highlight" >Full stack web development</span></h2>
                    </div>
                    <div className="heading-contact">
                    <a href="#contact-section-wrapper" class="btn">Contact me</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Heading;