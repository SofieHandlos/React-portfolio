import Macbook1 from "../images/project1-macbook.png";
import Macbook2 from "../images/project2-macbook.png";
import Macbook3 from "../images/project3-macbook.png";
import Macbook4 from "../images/project4-macbook.png";
import { motion } from "framer-motion";
export default function MyProjects() {
  return (
    <section className="projectpage">
      <h1>My projects</h1>
      <article>
        <h2 className="projectpage-header">Programmering</h2>
        <h3 className="projectpage-subheader">
          In connection with project assignments and exams at the business
          academy, I have designed and developed websites based on the company
          and the users' needs. I have primarily developed websites in HTML and
          CSS, but in the 2nd semester, I started to learn about JavaScript,
          which is why this has subsequently started to become a larger part of
          programming projects.
        </h3>
        <div className="project-flex-container">
          <div className="project-text-container">
            <h3>HTML and CSS</h3>
            <p>
              In the 1st semester, my group and I did a project around Kunsthal
              Aarhus, where the Mobile First approach was the focus. The aim
              here was to create a better user experience using the strategy
              around progressive advancement. Starting our design with smaller
              screens enforces restrictions like bandwidth, screen size, and
              limited or no multitasking capabilities, forcing us to focus on
              creating a lean product with essential features being prioritized.
            </p>
            <a href="https://aarhuskunsthal.sofieht.dk/">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="projects-button"
              >
                Link til website &rarr;
              </motion.button>
            </a>
            <br></br>
            <a href="https://github.com/SofieHandlos/Mobilefirst-KunsthalAarhus-portfolio-">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="projects-button"
              >
                Link til Github &rarr;
              </motion.button>
            </a>
          </div>
          <img className="macbook" src={Macbook1} alt="mackbook"></img>
        </div>
      </article>

      <article>
        <div className="first-project-flex-container2">
          <div className="project-text-container">
            <h3>HTML and CSS</h3>
            <p>
              My exam in the 1st semester consisted of creating an experience
              site for an everyday product. The following two strategic goals
              were met; to address the product to a new target group and
              revitalize the product/brand. Therefore, this exam consisted of a
              large amount of research on the product and the new target group.
            </p>
            <a href="https://urtekramfettuccine.sofieht.dk/">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="projects-button"
              >
                Link to website &rarr;
              </motion.button>
            </a>
            <br></br>
            <a href="https://github.com/SofieHandlos/Fettucine-eksamen1.sem-portfolio-">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="projects-button"
              >
                Link to Github &rarr;
              </motion.button>
            </a>
          </div>
          <img className="macbook" src={Macbook2} alt="mackbook"></img>
        </div>
      </article>

      <article>
        <div className="project-flex-container">
          <div className="project-text-container">
            <h3>JavaScript</h3>
            <p>
              Solbiler ApS is a fictitious car rental website that I have
              programmed in connection with the teaching. The website is
              programmed with HTML, CSS, and JavaScript. The data you enter is
              passed on using HTTP-get and SessionsStorage, resulting in a fully
              functional car rental page. In addition, a filtering function has
              been programmed which makes it possible to search for specific
              cars.
            </p>
            <a href="https://solbiler.sofieht.dk/">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="projects-button"
              >
                Link to website &rarr;
              </motion.button>
            </a>
            <br></br>
            <a href="https://github.com/SofieHandlos/SolbilerAps-portfolio-">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="projects-button"
              >
                Link to Github &rarr;
              </motion.button>
            </a>
          </div>
          <img className="macbook" src={Macbook3} alt="mackbook"></img>
        </div>
      </article>

      <article className="second-article-section">
        <h2 className="projectpage-header">UX/UI</h2>
        <h3 className="projectpage-subheader">
          I have used different design programs to develop prototypes and much
          more, focusing on UX and UI. Programs such as Adobe XD, Adobe
          Photoshop and so on have therefore been a big part of the process of
          developing websites and web apps in connection with a project
          assignments and exams in my education, as well as my own interest and
          work.
        </h3>
        <div className="project-flex-container2">
          <div className="project-text-container">
            <h3>UX/UI</h3>
            <p>
              When we were introduced to some of the Adobe programs in class, I
              was very curious about learning more about them. Therefore, I
              found some guides and tutorials for Adobe XD and made a prototype
              of an interactive mobile navigation.
            </p>

            <a href="https://xd.adobe.com/view/1de2cff5-de2d-4ec0-9208-40263f112458-48b1/?fullscreen">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="projects-button"
              >
                Link to Prototype &rarr;
              </motion.button>
            </a>
          </div>
          <img className="macbook" src={Macbook4} alt="mackbook"></img>
        </div>
      </article>
    </section>
  );
}
