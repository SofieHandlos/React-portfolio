import Bannerpicture from "../images/bannerimage.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function BannerImage() {
  return (
    <section>
      <div className="banner-container">
        <div className="bannerimage-container">
          <img
            className="bannerimage"
            src={Bannerpicture}
            alt="bannerimage"
          ></img>
        </div>
        <div className="banner-text-container">
          <h1 className="banner-header">Sofie Handlos Thomassen</h1>
          <h3 className="banner-text">
            I am a Multimedia designer with a specialization in frontend
            development and a passion for UX and UI. I would love to be a part
            of you team!
          </h3>
          <NavLink to="/about">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0 }}
              type="submit"
              className="banner-image-button"
            >
              Read more &rarr;
            </motion.button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
