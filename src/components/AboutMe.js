import AboutMeImage from "../images/aboutmeimage.png";

export default function AboutMeSection() {
  return (
    <section className="aboutme-section">
      <article className="aboutme-article">
        <img
          className="aboutme-image"
          src={AboutMeImage}
          alt="bannerimage"
        ></img>
        <h3 className="aboutme-heading">Who am I?</h3>
        <p>
          I am 23 years old and studying multimedia design in the 3rd semester.
          Besides that, I am working as a student assistant in software
          development at Amero. I am an{" "}
          <span style={{ fontWeight: "bold" }}>extremely social person</span>{" "}
          who loves to be where something is happening which is why I also love
          spending time with my friends and family. Other than that, I love
          coffee, yoga and travelling. I spent my sabbatical years after high
          school{" "}
          <span style={{ fontWeight: "bold" }}>
            travelling around Asia and New Zealand
          </span>
          , among other places. After studying for a few months at the
          university, I chose to change studies. I wanted an everyday life that
          consisted to a greater extent of group work, case-oriented tasks, and
          creative work, which is why I ended up on multimedia design.
        </p>
        <br></br>
        <br></br>

        <h3 className="aboutme-heading">What do I like to work with</h3>
        <p>
          I am very{" "}
          <span style={{ fontWeight: "bold" }}>
            {" "}
            passionate about programming and UX/UI
          </span>{" "}
          and participating in interdisciplinary work processes in the
          development of digital user interfaces to create a good user
          experience. In the In the 3rd semester, I chose to{" "}
          <span style={{ fontWeight: "bold" }}>specialize in front-end</span> to
          challenge myself and develop my programming skills. I dream of sitting
          in a position where I collaborate with colleagues who work with UX/UI
          and focus on the structure of a user interface, as well as colleagues
          who develop it.
        </p>
        <br></br>
        <br></br>

        <h3 className="aboutme-heading">How do I like to work</h3>
        <p>
          As a person, I am very{" "}
          <span style={{ fontWeight: "bold" }}>
            open, detail-oriented, and well-organized.{" "}
          </span>
          I have a
          <span style={{ fontWeight: "bold" }}>
            {" "}
            strong sense of responsibility,{" "}
          </span>
          regardless of whether it is towards my boss, colleagues, or study
          group.{" "}
          <span style={{ fontWeight: "bold" }}>
            I love working in groups{" "}
          </span>{" "}
          where you can inspire each other and collaborate to achieve a project
          well. In group work, I am{" "}
          <span style={{ fontWeight: "bold" }}>
            not afraid to speak my mind
          </span>{" "}
          and I always strive for the best possible result. At the same time, it
          is important to me that everyone feels seen and heard.
        </p>

        <br></br>
        <br></br>
      </article>
      <div className="experiences-container">
        <div className="experiences-container-text">
          <h3 className="aboutme-heading-white">Experiences and competences</h3>
          <p>
            Through my education and work, I have learned to work professionally
            by developing and implementing digital design and digital user
            experiences that match user needs. In addition, I have gained
            knowledge in test methods such as think aloud, gangster test and
            open and closed card sorting. Furthermore, I have developed my
            skills in programming with more knowledge about, among other things,
            React, fetching, and data sources. I look forward to expanding my
            current skills even more.
          </p>
        </div>
      </div>
    </section>
  );
}
