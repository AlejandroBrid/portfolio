import { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Puedes ajustar el valor 100 según sea necesario
      setShowScrollButton(scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Alejandro</p>
        </div>
        <div className={`footer-iconTop ${showScrollButton ? "visible" : ""}`}>
          <a href="#">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
