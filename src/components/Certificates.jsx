import React from "react";

function Certificates(){
    return (
        <>
            <div className="certificates-wrapper">
                <div className="certificates-title title">
                    <h1>Certificates</h1>
                </div>
                <div className="certificates-content">
                    <div className="certificate">
                        <div className="certificate-issuer">
                            <p>ISSUER</p>
                        </div>
                        <div className="certificate-title">
                            <p>TITLE</p>
                        </div>
                        <div className="certificate-view">
                            <p></p>
                        </div>
                    </div>
                    <div className="certificate">
                        <div className="certificate-issuer">
                            <p>Udemy</p>
                        </div>
                        <div className="certificate-title">
                            <p>Full stack developer</p>
                        </div>
                        <div className="certificate-view">
                            <p><a target="_blank" href="https://www.udemy.com/certificate/UC-b1ff7c8f-10c5-4b84-babf-4dffcf6bcea7/" alt="course-content">VIEW</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certificates;