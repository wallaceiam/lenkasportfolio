import React from "react";
import Logo from "../Images/Logo";
import { Link } from "../Link";

const Header = () => (
  <header>
    <div className="container">
      <nav className="navbar navbar-expand-md">
        <Link className="navbar-brand" href="/" passHref={true}>
            <Logo />
            LENKA WALLACE
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#headerNavbar"
          aria-controls="headerNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="headerNavbar">
          <ul className="navbar-nav ml-auto">
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

          <a
            className="btn btn-outline-primary rounded ml-md-3"
            href="mailto:lenkawallace.ux@gmail.com?subject= Hello%20Lenka&body=We%20want%20to%20hire%20you"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
