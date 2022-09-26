import MailIcon from "../images/mail-icon.png";
import PhoneIcon from "../images/phone-icon.png";
import FacebookIcon from "../images/facebook-icon.png";
import LinkedinIcon from "../images/linkedin-icon.png";

export default function Footer() {
  return (
    <section className="footer">
      <h3 className="footer-text">Portfolio by Sofie Handlos</h3>

      <div className="contactinfo-container">
        <img className="contact-icons" src={PhoneIcon} alt="phone-icon"></img>
        <p>+45 40 16 28 07</p>
      </div>
      <div className="contactinfo-container">
        <img className="contact-icons" src={MailIcon} alt="mail-icon"></img>
        <p>sofie-handlos@hotmail.dk</p>
      </div>

      <div className="some-icons-container">
        <a href="https://www.facebook.com/sofie.handlosthomassen">
          <img
            className="some-icons"
            src={FacebookIcon}
            alt="facebook-icon"
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/sofie-handlos-thomassen-702158227/">
          <img
            className="some-icons"
            src={LinkedinIcon}
            alt="linkedin-icon"
          ></img>
        </a>
      </div>
    </section>
  );
}
