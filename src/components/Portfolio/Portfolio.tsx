/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PortfolioType } from "../../lib/api";

type PortfolioSectionProps = {
  portfolios: PortfolioType[];
};

const PortfolioSection = ({ portfolios }: PortfolioSectionProps) => (
  <section id="portfolio" className="fdb-block">
    <div className="container">
      <div className="row justify-content-center pb-3">
        <div className="col-12 text-center">
          <h1>Portfolio Highlights</h1>
        </div>
      </div>

      {portfolios.map((p, i) => (
        <div key={i}>{p.title}</div>
      ))}

      <div className="row text-left align-items-center">
        <div className="col-12 col-md-4 m-md-auto ml-0 py-5 mr-2">
          <a href="/portfolio/asto/">
            <div className="project">
              <img
                alt="image"
                className="img-fluid"
                src="/imgs/projects/asto.png"
                srcSet="/imgs/projects/asto.png 1x, /imgs/projects/asto@2x.png 2x"
              />
              <div className="overlay text-center">
                <div className="text">
                  <h2 className="nowrap">
                    <strong>Asto - Business Capital</strong>
                  </h2>
                  <p className="lead">Responsive Design</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-12 col-md-4 m-md-auto ml-3 py-5 mr-3">
          <a href="/portfolio/levell/">
            <div className="project">
              <img
                alt="image"
                className="img-fluid"
                src="/imgs/projects/levell.png"
                srcSet="/imgs/projects/levell.png 1x, /imgs/projects/levell@2x.png 2x"
              />
              <div className="overlay text-center">
                <div className="text">
                  <h2 className="nowrap">
                    <strong>Levell</strong>
                  </h2>
                  <p className="lead">Mobile App</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-12 col-md-4 m-md-auto ml-2 py-5 mr-0">
          <a href="/portfolio/generationchange/">
            <div className="project">
              <img
                alt="image"
                className="img-fluid"
                src="/imgs/projects/genchange.png"
                srcSet="/imgs/projects/genchange.png 1x, /imgs/projects/genchange@2x.png 2x"
              />
              <div className="overlay text-center">
                <div className="text">
                  <h2 className="nowrap">
                    <strong>Generation Change</strong>
                  </h2>
                  <p className="lead">Responsive Design</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="row text-left align-items-center">
        <div className="col-12 col-md-4 m-md-auto ml-0 py-5 mr-2">
          <a href="/portfolio/bloomsbury/">
            <div className="project">
              <img
                alt="image"
                className="img-fluid"
                src="/imgs/projects/bloomsbury.png"
                srcSet="/imgs/projects/bloomsbury.png 1x, /imgs/projects/bloomsbury@2x.png 2x"
              />
              <div className="overlay">
                <div className="text">
                  <h2 className="nowrap">
                    <strong>Bloomsbury Beginnings</strong>
                  </h2>
                  <p className="lead">Mobile Web App</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-12 col-md-4 m-md-auto ml-3 py-5 mr-3">
          <a href="/portfolio/gftravel/">
            <div className="project">
              <img
                alt="image"
                className="img-fluid"
                src="/imgs/projects/gftravel.png"
                srcSet="/imgs/projects/gftravel.png 1x, /imgs/projects/gftravel@2x.png 2x"
              />
              <div className="overlay">
                <div className="text">
                  <h2 className="nowrap">
                    <strong>GF Travel</strong>
                  </h2>
                  <p className="lead">Mobile App</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-12 col-md-4 m-md-auto ml-2 py-5 mr-0">
          <a href="/portfolio/camden/">
            <div className="project">
              <img
                alt="image"
                className="img-fluid"
                src="/imgs/projects/camden.png"
                srcSet="/imgs/projects/camden.png 1x, /imgs/projects/camden@2x.png 2x"
              />
              <div className="overlay">
                <div className="text">
                  <h2 className="nowrap">
                    <strong>Camden Market</strong>
                  </h2>
                  <p className="lead">Website Re-Design</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
