import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo/dwella-logo.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import FooterLinks from '../FooterLinks/FooterLinks';
import { footerLinks } from './info';

export default function Footer() {
  return (
    <section className="footer">
      <img className="logo footer-logo" src={logo} alt="Dwella Logo" />

      <div className="footer-container">
        {footerLinks.map((link) => {
          return (
            <>
              <FooterLinks links={link.links} title={link.title} />
            </>
          );
        })}
      </div>

      <div className="footer-info">
        <h6 className="footer-info-title">Contact</h6>
        <p>Toronto, ON, Canada</p>
        <p>647-237-1286</p>
        <a href="mailto:dwellainvesting@gmail.com">dwellainvesting@gmail.com</a>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/dwellainc/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icon" src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/dwellainc?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icon" src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://ca.linkedin.com/company/dwella-inc"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icon" src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
}
