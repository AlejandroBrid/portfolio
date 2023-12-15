import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import "./Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLanguageChange = () => {
    changeLanguage(language === "es" ? "en" : "es");
  };

  const flagImage = language === "es" ? "/esp.svg" : "/eng.svg";

  return (
    <>
      <header className="header">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          {"<Alejandro />"}
        </NavLink>
        <div
          className={isMenuOpen ? "bx bx-x" : "bx bx-menu"}
          id="menu-icon"
          onClick={toggleMenu}
        ></div>
        <nav className={isMenuOpen ? "navbar active" : "navbar"}>
          <NavLink to="/" activeclassname="active" onClick={closeMenu}>
            {t("home")}
          </NavLink>
          <NavLink to="/about" activeclassname="active" onClick={closeMenu}>
            {t("about")}
          </NavLink>
          <NavLink to="/projects" activeclassname="active" onClick={closeMenu}>
            {t("portfolio")}
          </NavLink>
          <NavLink to="/contact" activeclassname="active" onClick={closeMenu}>
            {t("contact")}
          </NavLink>

          <span className="active-nav"></span>
          <div>
            <button className="lang" onClick={handleLanguageChange}>
              <div className="flag-icon-container">
                <img
                  className="lang flag-icon"
                  src={flagImage}
                  alt={language}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
