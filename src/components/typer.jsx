import { Typewriter } from "react-simple-typewriter";
import styles from "./typer.module.css";

function Selfintro() {
  return (
    <>
      <h2 className={`${styles.hi}`}>
        Hi, I'm <br />{" "}
        <span className={`${styles.words}`}>
          <Typewriter
            words={[
              "Aritra!",
              "a Web Developer",
              "a Python Devloper",
              "a Code Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
    </>
  );
}

export default Selfintro;
