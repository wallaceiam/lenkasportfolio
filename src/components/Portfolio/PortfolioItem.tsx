/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "../Link";
import { PortfolioType } from "../../lib/api";

type PortfolioItemProps = {
  portfolio: PortfolioType;
};

const PortfolioItem = ({ portfolio }: PortfolioItemProps) => {
  const { title, slug, lead } = portfolio;
  return (
    <Link href={`/portfolio/${slug}/`}>
      <div className="project">
        <img
          alt="image"
          className="img-fluid"
          src={`/imgs/projects/${slug}.png`}
          srcSet={`/imgs/projects/${slug}.png 1x, /imgs/projects/${slug}@2x.png 2x`}
        />
        <div className="overlay text-center">
          <div className="text">
            <h2 className="nowrap">
              <strong>{title}</strong>
            </h2>
            <p className="lead">{lead}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
