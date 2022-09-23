import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uv2euqg",
        "template_m97k3ij",
        form.current,
        "_yFyrpflExEUkdmxD"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your email!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong", error);
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="flex-contact-formular">
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  required
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              {/* <!-- email --> */}
              <div className="form-group">
                <label for="email">Email address</label>
                <input
                  required
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-group">
              <label for="email_body">Message</label>
              <textarea
                required
                className="form-control"
                id="email_body"
                placeholder="Enter your message"
                rows="5"
                name="message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
