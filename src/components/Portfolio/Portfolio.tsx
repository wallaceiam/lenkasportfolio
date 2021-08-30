/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PortfolioType } from "../../lib/api";
import PortfolioItem from "./PortfolioItem";

type PortfolioSectionProps = {
  portfolios: PortfolioType[];
};

type Grid = {
  portfolios: PortfolioType[];
};

const grid = (portfolios: PortfolioType[]): Grid[] =>
  (portfolios ?? []).reduce((prev, cur, index) => {
    const id = index % 3;
    if (id === 0) {
      prev.push({ portfolios: [cur] });
    } else {
      prev[prev.length - 1].portfolios.push(cur);
    }
    return prev;
  }, new Array<Grid>());

const PortfolioSection = ({ portfolios }: PortfolioSectionProps) => (
  <section id="portfolio" className="fdb-block">
    <div className="container">
      <div className="row justify-content-center pb-3">
        <div className="col-12 text-center">
          <h1>Portfolio Highlights</h1>
        </div>
      </div>

      {grid(portfolios).map((row, index) => (
        <div key={index} className="row text-left align-items-center">
          {row.portfolios.map((p, i) => {
            const ml = i === 0 ? "ml-0" : "ml-3";
            const mr = i === 2 ? "mr-0" : "mr-2";
            const className = `col-12 col-md-4 m-md-auto ${ml} py-5 ${mr}`;
            return (
              <div key={`${index}_${i}`} className={className}>
                <PortfolioItem portfolio={p} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
