import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact (){

    return(

    
    <section id="contact-section-wrapper">
        <div className="box-wrapper">
            <div className="info-wrap">
                <h2 className="info-title">Contact Information</h2>
                <h3 className="info-sub-title">Fill up the form and I will contact you as soon as posible</h3>
                <div className="info-details">

                <ul>
                    <li>
                        <span>Phone: </span> <a href="tel:+38761672380">+38761 672 380</a>
                    </li>
                    <li>
                        <span>Email: </span> <a href="mailto:ediskasumovic70@gmail.com">ediskasumovic70@gmail.com</a>
                    </li>
                    <li>
                        <span>Phone: </span> <a href="www.facebook.com">+38761 672 380</a>
                    </li>
                </ul>
                <ul className="social-icons">
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
                            <input type="text" className="fname" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="lname" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="phone" placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="Write your message here"> </textarea>
                        </div>

                        <button type="submit" className="button-64" role="button" ><span class="text">Contact Me</span></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact;