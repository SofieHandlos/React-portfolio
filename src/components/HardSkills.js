import HTMLIcon from "../images/htmlicon.png";
import JavaIcon from "../images/jsicon.png";
import IllustratorIcon from "../images/aiicon.png";
import VScodeIcon from "../images/vscode.png";
import GithubIcon from "../images/githubicon.png";
import ReactIcon from "../images/reacticon.png";
import AdobeXDIcon from "../images/adobexdicon.png";
import AffinityIcon from "../images/affinityicon.png";

export default function HardSkills() {
  return (
    <section className="skills-section">
      <h1>My skills</h1>
      <h2 className="sub-header">
        Programs and programming languages I have used
      </h2>
      <h3 className="skills-section-subheader">
        At være god til noget kan ofte være en svær ting at vurdere – især for
        mig. For hvornår har man 100% styr på Photoshop? Jeg elsker at bruge tid
        på at nørde, og blive endnu bedere til det jeg allerede er god til. Jeg
        har taget det med jeg bruger mest.
      </h3>

      <div class="wrapper">
        <div class="flex-container">
          <div class="box">
            <div className="eachskillscontainer">
              <img className="skills-icons" src={HTMLIcon} alt="icon"></img>
              <div className="flex-text">
                <h3>HTML and CSS 5/5</h3>
                <p>
                  I have worked with HTML and CSS on 1. and 2. semester to
                  develop websites.
                </p>
              </div>
            </div>
          </div>

          <div class="box">
            <div className="eachskillscontainer">
              <img className="skills-icons" src={AffinityIcon} alt="icon"></img>
              <div className="flex-text">
                <h3>Affinity Designer 4/5</h3>
                <p>
                  I have used Adobe Affinity to create prototypes for redesigns-
                  especially at work.
                </p>
              </div>
            </div>
          </div>

          <div class="box">
            <div className="eachskillscontainer">
              <img className="skills-icons" src={ReactIcon} alt="icon"></img>
              <div className="flex-text">
                <h3>React 2/5</h3>
                <p>
                  We learned about React at the beginning of the 3rd semester to
                  be able to program this portfolio in React.
                </p>
              </div>
            </div>
          </div>

          <div class="box">
            <div className="eachskillscontainer">
              <img className="skills-icons" src={GithubIcon} alt="icon"></img>
              <div className="flex-text">
                <h3>Github 3/5</h3>
                <p>
                  Ee learned about React at the beginning of the 3rd semester to
                  be able to program this??????????????????
                </p>
              </div>
            </div>
          </div>

          <div class="box">
            <div className="eachskillscontainer">
              <img
                className="skills-icons"
                src={IllustratorIcon}
                alt="icon"
              ></img>
              <div className="flex-text">
                <h3>Adobe Illustrator 4/5</h3>
                <p>
                  I have used illustrator for all my projects and exams to make
                  logos and illustrations.
                </p>
              </div>
            </div>
          </div>

          <div class="box">
            <div className="eachskillscontainer">
              <img className="skills-icons" src={AdobeXDIcon} alt="icon"></img>
              <div className="flex-text">
                <h3>Adobe XD 5/5</h3>
                <p>
                  I have used Adobe XD to make prototypes and it is a program I
                  really like to work in.
                </p>
              </div>
            </div>
          </div>

          <div class="box">
            <div className="eachskillscontainer">
              <img className="skills-icons" src={JavaIcon} alt="icon"></img>
              <div className="flex-text">
                <h3>Javascript 2/5</h3>
                <p>
                  We had lessons in Javascript in the 2nd semester and it made
                  me curious to learn more, which is one of the reasons why I
                  chose frontend in the 3rd semester.
                </p>
              </div>
            </div>
          </div>

          <div class="box">
            <div className="eachskillscontainer">
              <img className="skills-icons" src={VScodeIcon} alt="icon"></img>
              <div className="flex-text">
                <h3>Visual Studio Code 4/5</h3>
                <p>
                  I have programmed in visual studio code since the 1st semester
                  and am therefore comfortable with it! At my work I have become
                  acquainted with Webstorm.
                </p>
              </div>
            </div>
          </div>

          <div class="box">
            <div className="eachskillscontainer">
              <img className="skills-icons" src={ReactIcon} alt="icon"></img>
              <div className="flex-text">
                <h3>React 2/5</h3>
                <p>
                  Ee learned about React at the beginning of the 3rd semester to
                  be able to program this portfolio in React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
