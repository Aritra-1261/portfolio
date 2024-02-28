import Styles from "./body.module.css";
import projects from "./ProjectAssets/project_data.json";
import Typer from "./typer";
import Skills from "./skills";
import Contact from "./contact";
function Body() {
  return (
    <>
      <div className={`${Styles.bodybox}`}>
        <div className={`${Styles.header}`}>
          <Typer />
          <a
            href="https://www.linkedin.com/in/Aritra-Dutta-Roy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className={`${Styles.li_icon}`}
            >
              <path
                fill="currentColor"
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              />
            </svg>
            <p>Follow me on linkedin</p>
          </a>
        </div>
        <div className={`${Styles.ProjBox}`}>
          <div className={`${Styles.container}`}>
            <img
              alt="Aritra Dutta Roy"
              loading="lazy"
              width="120"
              height="120"
              decoding="async"
              className={`${Styles.profileimg}`}
              src="/assets/Aritra_Dutta_Roy.jpg"
            />
            <h2 style={{ color: "white" }}>Aritra Dutta Roy</h2>
          </div>
          <h2>Projects </h2>
          <div className={`${Styles.corosel}`}>
            {projects.projects.map((proj) => {
              var link =
                proj.live_url === "" ? proj.project_url : proj.live_url;
              return (
                <div className={`${Styles.card}`}>
                  <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                    <img src={`${proj.project_img}`} alt="" />
                    <div className={`${Styles.details}`}>
                      <h3>{proj.project_name}</h3>
                      <h5>{proj.project_skills}</h5>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <h2>Skills</h2>
          <div className={`${Styles.skillbox}`}>
            <Skills skilldata={projects.skills} />
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default Body;
