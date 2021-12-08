import React, { useRef } from "react";
import { Button, Label, Col, Row } from "reactstrap";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hmrf9qn",
        "template_ywkcgdl",
        form.current,
        "user_WUky3AspObOC2RTmTbBA3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <label className="label" htmlFor="name" md={2}>
            Name
          </label>
          <input className="input-field" type="text" name="name" />
        </div>
        <div className="form-row">
          <label className="label">Email</label>
          <input className="input-field" type="email" name="email" />
        </div>
        <div className="form-row">
          <label className="label message-label">Message</label>
          <textarea className="message-field" name="message" />
        </div>
        <div className="submit-btn-row">
            <input className="submit-btn" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
