/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutMe = () => (
  <section className="fdb-block">
    <div className="container">
      <div className="row justify-content-left">
        <div className="col col-md-8 text-left">
          <h1>About Me</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 text-left pt-4">
          <p className="lead">
            I am a UX Designer who has worked for large organisations such as
            Santander, Royal Bank of Scotland, Lloyds and Amazon. I transferred
            into the UX profession from running large business change projects.{" "}
          </p>

          <p className="lead">
            I am driven to create, improve and deliver user experience by
            implementing UX processes from research to release for digital
            experiences (mobile/desktop) and thrive in a customer-centric
            environment. With my infectious enthusiasm, I take a great deal of
            pride and joy in guiding others to work together to improve
            themselves and their community.
          </p>

          <p className="lead">
            Being a very hands-on person, I have developed a number of UX and
            technical skills including user research, persona creation, journey
            mapping, user and usability testing, IA, wireframing in Figma,
            Sketch, or Adobe Xd, prototyping in Figma and InVision, and coding
            in HTTML and CSS.
          </p>

          <h1>
            <i className="fab fa-figma mr-1"></i>
            <i className="fab fa-sketch mr-1"></i>
            <i className="fab fa-adobe mr-1"></i>
            <i className="fab fa-invision mr-1"></i>
            <i className="fab fa-slack mr-1"></i>
            <i className="fab fa-html5 mr-1"></i>
            <i className="fab fa-css3-alt mr-1"></i>
            <i className="fab fa-meetup mr-1"></i>
          </h1>
        </div>
        <div className="col-12 col-md-6 justify-content-start align-self-start">
          <div className="col-md-6 pt-4 justify-content-start align-self-start">
            <img
              alt="image"
              className="img-fluid round"
              src="/imgs/misc/about2.png"
              srcSet="/imgs/misc/about2.png 1x, /imgs/misc/about2@2x.png 2x"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
