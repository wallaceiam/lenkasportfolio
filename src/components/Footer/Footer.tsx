import React from "react";
import Logo from "../Images/Logo";
import { Link } from "../Link";

const Footer = () => (
  <footer className="fdb-block bg-dark footer-small">
    <div className="container">
      <div className="row text-center align-items-center">
        <div className="col-12 col-lg-4 text-lg-left">
          <Link className="navbar-brand" href="/" passHref={true}>
            <Logo />
            LENKA WALLACE
          </Link>
        </div>

        <div className="col mt-4 mt-lg-0 text-center">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cv/CV_Lenka_Wallace_UX_v1.0.pdf">
                CV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-4 mt-4 mt-lg-0 text-lg-right">
          <a href="https://medium.com/@lenkawallace" className="mx-2">
            <i className="fab fa-medium" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lenka-wallace-965aa958/"
            className="mx-2"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
          <a
            href="mailto:lenkawallace.ux@gmail.com?subject= Hello%20Lenka&amp;body=We%20want%20to%20hire%20you"
            className="mx-2"
          >
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className="row mt-4 text-center">
        <div className="col-12">
          Made with <i className="fas fa-heart"></i> in London &copy; 2021
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
