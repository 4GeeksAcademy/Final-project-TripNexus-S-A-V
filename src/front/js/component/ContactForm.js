import React, { useRef } from "react";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
init(process.env.ID);

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_vxli3h9",
        "template_cjq8lf9",
        form.current,
        "gu1HnNavQ_Uc5twi0"
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMessage.innerHTML = '<p class="success">Message send</p>';

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        },
        (error) => {
          // console.log(error.text);
          formMessage.innerHTML =
            '<p class="error">Error! Message not send, please try again!</p>';
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="container-signup">
      <div className="content-signup">
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nombre</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Correo electrónico</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Mensaje</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Send" className="btn btn-primary reset-button-signup mt-2" />
      </form>
      <div className="formMessage"></div>
      </div>
    </div>
  );
};

export default ContactForm;
