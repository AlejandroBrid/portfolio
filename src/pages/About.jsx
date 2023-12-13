import "./About.css";
import "boxicons";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

export const About = () => {
  window.onscroll = () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  };
  const { t } = useTranslation();
  return (
    <>
      <section className="about" id="about">
        <h2 className="heading">{t("about")}</h2>
        <div className="about-img">
          <img src="about2.jpg" alt="" />
          <span className="circle-spin"></span>
        </div>
        <div className="about-content">
          <h3>{t("title")}</h3>
          <p>{t("description")}</p>
        </div>
      </section>
      <section className="education" id="education">
        <h2 className="heading">{t("my-journey")}</h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">{t("education")}</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 05/2023 - 10/2023
                  </div>
                  <h3>{t("education1")}</h3>
                  <p>{t("education1info")}</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 1993 - 1998
                  </div>
                  <h3>{t("education2")}</h3>
                  <p>{t("education2info")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">{t("experience")}</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i>1998 - Present
                  </div>
                  <h3>{t("experience1")}</h3>
                  <p>{t("experience1info")}</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 2018 - 2020
                  </div>
                  <h3>{t("experience2")}</h3>
                  <p>{t("experience2info")}</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 2018 - 2020
                  </div>
                  <h3>{t("experience3")}</h3>
                  <p>{t("experience3info")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <h2 className="heading">{t("skills")}</h2>
        <div className="skills-row">
          <div className="skills-column">
            <div className="skills-box">
              {/* Primera fila con 4 elementos */}
              <div className="skills-content row1">
                <div className="progress">
                  <img
                    src="/HTML.png"
                    alt="Logo HTML"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3>HTML</h3>
                </div>
                <div className="progress">
                  <img
                    src="/CSS.png"
                    alt="Logo CSS"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3>CSS</h3>
                </div>
                <div className="progress">
                  <img
                    src="/JS.png"
                    alt="Logo JS"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3>JavaScript</h3>
                </div>
                <div className="progress">
                  <img
                    src="/NODE.png"
                    alt="Logo Node"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3>NodeJs</h3>
                </div>
                <div className="progress">
                  <img
                    src="/SQL.png"
                    alt="Logo SQL"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3>SQL</h3>
                </div>
                <div className="progress">
                  <img
                    src="/REACT.png"
                    alt="Logo React"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3>React</h3>
                </div>
                <div className="progress">
                  <img
                    src="/GIT.png"
                    alt="Logo Git"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3>Git</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
