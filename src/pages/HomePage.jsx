import "./HomePage.css";
import "boxicons";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { t } = useTranslation();
  const [title] = useState(t("title"));

  return (
    <>
      <section className="home">
        <div className="home-content">
          <h1>{t("greeting")}</h1>
          <div className="text-animate">
            <h3>
              <Typewriter
                options={{
                  strings: [title],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
          <p>{t("intro")}</p>
          <div className="btn-box">
            <a href="https://drive.google.com/file/d/1HcyuEtZeuNVRif5ZRX3KL1e3cRRMH4lB/view?usp=sharing">
              CV
            </a>
            <Link to="/contact">Let&apos;s Talk</Link>
          </div>
        </div>
        <div className="home-sci">
          <a href="https://www.linkedin.com/in/alejandro-brid/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/AlejandroBrid?tab=repositories">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://gitlab.com/alejandrojbrid">
            <i className="bx bxl-gitlab"></i>
          </a>
        </div>
        <span className="home-imgHover"></span>
      </section>
    </>
  );
};
