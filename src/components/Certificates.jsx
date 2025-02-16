import React from "react";

function Certificates(){
    return (
        <>
            <div className="certificates-wrapper">
                <div className="certificates-title">
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
                            <p>VIEW</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certificates;