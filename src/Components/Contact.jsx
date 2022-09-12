import React from "react";
import "../Styles/Contact.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
export default function Contact() {
  return (
    <div className="contactContainer" id="contact">
      <h1 className="headingC">Let's Connect</h1>
      <hr className="lineC" />
      <p className="paraC">
        Get in touch with me through below links and build something together.{" "}
      </p>
      <div className="cBox">
        <div className="commonCBox">
          <AiFillLinkedin className="iconss" />
          <p>
            <a
              href="https://www.linkedin.com/in/sahnawaz-hussain-350508219/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="commonCBox">
          <AiFillGithub className="iconss" />
          <p>
            <a href="https://github.com/Sahnawaz7hussain" target="_blank">
              Github
            </a>
          </p>
        </div>
        <div className="commonCBox">
          <AiOutlineMail className="iconss" />
          <p>sahnawazhussain852@gmail.com</p>
        </div>
        <div className="commonCBox">
          <AiOutlineWhatsApp className="iconss" />
          <p>+91 7739920196</p>
        </div>
      </div>
    </div>
  );
}
