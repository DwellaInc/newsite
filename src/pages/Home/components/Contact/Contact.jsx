import React from 'react';
import './Contact.scss';
import house from '../../../../assets/images/GetInTouch_House.png';
import Button from '../../../../components/Button/Button';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <img className="contact-image" src={house} alt="House" />
        <form
          className="contact-form"
          action="https://formsubmit.co/dwellainvesting@gmail.com"
          method="POST"
        >
          <h3>Get in touch with us</h3>
          <div className="contact-input-container">
            <input type="hidden" name="_next" value="http://dwellainc.com/" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              className="contact-input"
              type="text"
              name="first-name"
              placeholder="First name"
              required
            />
            <input
              className="contact-input"
              type="text"
              name="last-name"
              placeholder="Last name"
              required
            />
          </div>
          <input
            className="contact-input"
            type="email"
            placeholder="Email address"
            name="email"
            required
          />
          <textarea
            placeholder="Write your message here"
            name="message"
            required
          />
          <Button type="submit" className="btn btn-primary" text="Send" />
        </form>
      </div>
    </section>
  );
}
