import Styles from "./about.module.css";
function About() {
  return (
    <div className={`${Styles.sidebar}`}>
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
        <ul className={`${Styles.list}`}>
          <a href="#">
            <li className={`${Styles.listitems}`}>
              <i className={`fa-solid fa-house ${Styles.sideicon}`} />
              <p>Home</p>
            </li>
          </a>

          <a href="#contacts">
            <li className={`${Styles.listitems}`}>
              <i className={`fa-solid fa-address-card ${Styles.sideicon}`} />
              <p>Contact</p>
            </li>
          </a>

          <a href="#">
            <li className={`${Styles.listitems}`}>
              <i className={`fa-solid fa-briefcase ${Styles.sideicon}`} />
              <p>Project</p>
            </li>
          </a>

          <a href="#">
            <li className={`${Styles.listitems}`}>
              <i className={`fa-solid fa-file ${Styles.sideicon}`} />
              <p>
                Resume <i className="fa-solid fa-download" />
              </p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default About;
