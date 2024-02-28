import Styles from "./skill.module.css";

function skillsection({ skilldata }) {
  return (
    <>
      {skilldata.map((s) => {
        return (
          <>
            <div className={`${Styles.skillbox}`}>
              <span>{s.tech_stack}</span>
              <div>
                {s.tech.map((tech) => {
                  return (
                    <span
                      className={`${Styles.skillelement}`}
                      style={{ border: `solid 1px ${tech.color}` }}
                    >
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default skillsection;
