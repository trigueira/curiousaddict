import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-contact">
        <p className="footer-contact-heading">ARE YOU CURIOUS FOR MORE?</p>
        <a
          className="footer-contact-email"
          href="mailto:trigueiro.andreia@gmail.com"
        >
          trigueiro.andreia@gmail.com
        </a>
      </section>
      <small className="website-rights"> CuriousAddict &#169; 2020</small>
    </div>
  );
}

export default Footer;
