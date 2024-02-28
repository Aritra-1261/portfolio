import React from "react";
import Style from "./contact.module.css";
import email from "./img/email.png";
import location from "./img/location.png";
import phone from "./img/phone.png";

const Contact = () => {
  return (
    <>
      <div className={`${Style.container}`} id="contacts">
        <span className={`${Style.big_circle}`}></span>
        <img src="img/shape.png" className={`${Style.square}`} alt="" />
        <div className={`${Style.form}`}>
          <div className={`${Style.contact_info}`}>
            <h3 className={`${Style.title}`}>Let's get in touch</h3>
            <p className={`${Style.text}`}>
              I am ready and willing to start working! My schedule is open for
              any tasks! Let me know how I can assist you!
            </p>

            <div className={`${Style.info}`}>
              <br />
              <div className={`${Style.information}`}>
                <img src={email} className={`${Style.icon}`} alt="" />
                <p>aritraduttaqwerty@gmail.com</p>
              </div>
              <div className={`${Style.information}`}>
                <img src={phone} className={`${Style.icon}`} alt="" />
                <p>+91 85830 94509</p>
              </div>
            </div>

            <div className={`${Style.social_media}`}>
              <p>Connect with us :</p>
              <div className={`${Style.social_icons}`}>
                <a
                  href="https://www.linkedin.com/in/Aritra-Dutta-Roy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/Aritra-1261"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className={`${Style.contact_form}`}>
            <span className={`${Style.circle} ${Style.one}`}></span>
            <span className={`${Style.circle} ${Style.two}`}></span>

            <form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdq4uKBLr4rheVOEbQDkhw7N-yH-roKotLyPna5I-aw1EEwuw/formResponse"
              method="post"
            >
              <h3 className={`${Style.title}`}>Contact us</h3>
              <div className={`${Style.input_container}`}>
                <input
                  type="text"
                  name="entry.2005620554"
                  placeholder="Username *"
                  className={`${Style.input}`}
                  required
                />
              </div>
              <div className={`${Style.input_container}`}>
                <input
                  type="email"
                  name="entry.1045781291"
                  placeholder="Email *"
                  className={`${Style.input}`}
                  required
                />
              </div>
              <div className={`${Style.input_container}`}>
                <input
                  type="tel"
                  placeholder="Phone"
                  name="entry.1166974658"
                  className={`${Style.input}`}
                />
              </div>
              <div className={`${Style.input_container} ${Style.textarea}`}>
                <textarea
                  name="entry.839337160"
                  className={`${Style.input}`}
                  placeholder="Message"
                ></textarea>
              </div>
              <input type="submit" className={`${Style.btn}`} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

export default Contact;
