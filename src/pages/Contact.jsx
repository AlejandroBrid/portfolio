import "./Contact.css";
import "boxicons";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const userEmail = form.current.user_email.value;
    if (!emailRegex.test(userEmail)) {
      setSentMessage(t("invalid-email"));
      setTimeout(() => {
        setSentMessage(null);
      }, 2000);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSentMessage(t("emailsent"));
          setTimeout(() => {
            setSentMessage(null);
          }, 2000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSentMessage(t("email-error"));
        }
      );
  };
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">{t("contactme")}</h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder={t("name")}
                name="from_name"
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder={t("email")}
                name="user_email"
                required
              />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field" id="subject">
              <input
                type="text"
                placeholder={t("subject")}
                name="subject"
                required
              />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder={t("message")}
              required
            ></textarea>
            <span className="focus"></span>
          </div>
          <div className="send-message">
            <div className="btn-box-container">
              <div className="btn-box">
                <button type="submit" value="Send" className="btn">
                  {t("submit")}
                </button>
                <div className="mail-status">
                  {sentMessage && <p className="sent-message">{sentMessage}</p>}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};
