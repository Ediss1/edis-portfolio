import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact (){

    return(

    
    <section id="contact-section-wrapper">
                <h1 className="contact-title">Contact Information</h1>
        <div className="box-wrapper">
            <div className="info-wrap">
                <div className="info-details">

                <ul>
                    <li>
                        <p>The secret to getting ahead is getting started.</p>
                    </li>
                    <li>
                        <span>Email: </span> <a href="mailto:ediskasumovic70@gmail.com">ediskasumovic70@gmail.com</a>
                    </li>
                    <li>
                        <span>Phone: </span>+38761 672 380
                    </li>
                </ul>
                </div>

                <div className="social-icons">

                <ul>
                    <li>
                        <a href="www.facebook.com">
                            <i>
                                <FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#ffffff",}} />
                            </i>
                        </a>
                
                    </li>
                    <li>
                        <a href="www.instagram.com">
                            <i>
                                <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#ffffff",}}/>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="www.linkedin.com">
                            <i>
                                <FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{color: "#ffffff",}}/>
                            </i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="form-wrap">
                <form action="" method="POST">
                    <h2 className="form-title">Send me a message</h2>
                    <div className="form-fields">
                        <div className="form-group">
                            <label>Name *</label>
                            <input type="text" className="fname" placeholder="First Name" required/>
                        </div>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" className="email" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <label>Subject *</label>
                            <input type="text" className="phone" placeholder="Subject" required/>
                        </div>
                        <div className="form-group">
                            <label>Message *</label>
                            <textarea name="message" id="" placeholder="Write your message here" required> </textarea>
                        </div>

                        <button>
                            <a href="#" class="btn">Contact me</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact;