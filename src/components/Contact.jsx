import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f0707cf5-0123-4956-afb1-9e6077860549");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

function Contact (){

    return(

    
    <section id="contact-section-wrapper">
                <h1 className="contact-title title">Contact Information</h1>
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
                        <span>Phone: </span>+387 61 672 380
                    </li>
                </ul>
                </div>

                <div className="social-icons">

                <ul>
                    <li>
                        <a href="https://github.com/Ediss1" target="_blank">
                            <i>
                                <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#ffffff",}}/>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/edis-kasumovic-501a83177/" target="_blank">
                            <i>
                                <FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{color: "#ffffff",}}/>
                            </i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="form-wrap">
                <form onSubmit={onSubmit}>
                    <h2 className="form-title">Send me a message</h2>
                    <div className="form-fields">
                        <div className="form-group">
                            <label>Name *</label>
                            <input type="text" name="name" className="fname" placeholder="First Name" required/>
                        </div>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" name="email" className="email" placeholder="Email" required/>
                        </div>
                        
                        <div className="form-group">
                            <label>Message *</label>
                            <textarea name="message" placeholder="Write your message here" required> </textarea>
                        </div>

                        <button type="submit">
                            <i className="btn">Contact me</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact;