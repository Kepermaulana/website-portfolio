import React from "react";
import "./contact.css";
import Kasanah from "../../assets/kasanah.png";
import Bca from "../../assets/bca.png";
import Adaro from "../../assets/adaro.png";
import Google from "../../assets/google.png";
import FaceBookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import YoutubeIcon from "../../assets/youtube-icon.png";


const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Client</h1>
        <p className="clientDest">
          I have had opportunity to work with a diserve group of companies. Some
          of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={Kasanah} alt="Client" className="clientImg" />
          <img src={Bca} alt="Client" className="clientImg" />
          <img src={Adaro} alt="Client" className="clientImg" />
          <img src={Google} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">
          Contact Me
        </h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities
        </span>
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder="Your Name" id="" />
          <input type="email" className="email" placeholder="email" />
          <textarea name="message" id="" rows="5" className="msg" placeholder="Your Message"></textarea>
          <button type="submit" value='Send' className="submitBtn">Submit</button>
          <div className="links">
            <img src= { FaceBookIcon } alt="Facebook" className="link" />
            <img src= { InstagramIcon } alt="Instagram" className="link" />
            <img src= { TwitterIcon } alt="Twitter" className="link" />
            <img src= { YoutubeIcon } alt="Youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
