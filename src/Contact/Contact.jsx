import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Boton");
    emailjs
      .sendForm(
        "service_dy2evam",
        "template_7jxlc9v",
        form.current,
        "_n-fgVnK1x3AXd0R2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-8 text-center flex flex-col justify-center items-center gap-10">
      <h1>Contactame</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="form-control px-4 w-full sm:w-2/3"
      >
        <label className="label">Nombre:</label>
        <input
          type="text"
          name="from_name"
          className="input input-bordered input-sm w-full"
        />
        <label className="label">Correo Electronico:</label>
        <input
          type="email"
          name="from_email"
          className="input input-bordered input-sm"
        />
        <label className="label">Mensaje:</label>
        <textarea
          name="message"
          className="textarea textarea-bordered input-sm h-24 py-0"
        />
        <button className="btn btn-primary mt-4" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
