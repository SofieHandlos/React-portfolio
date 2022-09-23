import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <section className="contactpage">
        <h3 className="contact-text">Thank you for your visit</h3>
        <h1 className="contact-header">
          I am looking forward to hearing from you!
        </h1>
      </section>
      <ContactForm />
    </div>
  );
}
