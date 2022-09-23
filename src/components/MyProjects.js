import Macbook from "../images/macbook.png";
import Iphone from "../images/iphone.png";
export default function MyProjects() {
  return (
    <section>
      <h1>My projects</h1>
      <article>
        <h2 className="projectpage-header">Programmering</h2>
        <h3 className="projectpage-subheader">
          I forbindelse med projektopgaver og eksaminer på erhvervsakademiet,
          har jeg designet og udviklet både hjemmesider og webshops med
          udgangspunkt i virksomheden samt brugernes behov.
        </h3>
        <div className="project-flex-container">
          <div className="project-text-container">
            <h3>HTML and CSS</h3>
            <p>
              Kunsthal Aarhus is a fictitious car rental website that I have
              programmed in connection with the teaching. The website is
              programmed with HTML, CSS, and Javascript.
            </p>
            <button>Link til website</button>
          </div>
          <div className="macbook_iphone-container">
            <div>
              <img className="macbook" src={Macbook} alt="mackbook"></img>
            </div>
            <div>
              <img className="iphone" src={Iphone} alt="iphone"></img>
            </div>
          </div>
        </div>
      </article>

      <article>
        <div className="project-flex-container2">
          <div className="project-text-container">
            <h3>Javascript</h3>
            <p>
              Solbiler ApS is a fictitious car rental website that I have
              programmed in connection with the teaching. The website is
              programmed with HTML, CSS, and Javascript.
            </p>
            <button>Link til website</button>
          </div>
          <div className="macbook_iphone-container">
            <div>
              <img className="macbook" src={Macbook} alt="mackbook"></img>
            </div>
            <div>
              <img className="iphone" src={Iphone} alt="iphone"></img>
            </div>
          </div>
        </div>
      </article>

      <article>
        <h2 className="projectpage-header">UX/UI</h2>
        <h3 className="projectpage-subheader">
          I forbindelse med projektopgaver og eksaminer på erhvervsakademiet,
          samt egen interesse, har jeg udviklet prototyper i designprogrammering
          med fokus på UX og UI
        </h3>
        <div className="project-flex-container">
          <div className="project-text-container">
            <h3>UX/UI</h3>
            <p>
              Kunsthal Aarhus is a fictitious car rental website that I have
              programmed in connection with the teaching. The website is
              programmed with HTML, CSS, and Javascript.
            </p>
          </div>
          <div className="macbook_iphone-container">
            <div>
              <img className="macbook" src={Macbook} alt="mackbook"></img>
            </div>
            <div>
              <img className="iphone" src={Iphone} alt="iphone"></img>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
