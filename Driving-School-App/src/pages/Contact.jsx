import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">

      <h2>Book Your Lesson</h2>
      <p className="contact-intro">
        For block lessons and intensive please drop us a message using the form below,
        mentioning your location and dates that you would like to book.
        I will get back to you shortly with a response and payment details. <br /><br />
        Alternatively, you can call me on <strong>07854 153202</strong>.
      </p>

      <form className="contact-form">

        <label>Name*</label>
        <input type="text" required />

        <label>Contact Number*</label>
        <input type="text" required />

        <label>Email*</label>
        <input type="email" required />

        <label>Location*</label>
        <input type="text" required />

        <label>Message</label>
        <textarea rows="5"></textarea>

        <button type="submit" className="cta-button">Send Message</button>

      </form>
    </section>
  );
}
