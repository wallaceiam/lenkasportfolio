import type { NextPage } from "next";
import Head from "next/head";
import {
  Header,
  HeroSection,
  Footer,
  PortfolioSection,
  Meta,
} from "../../components";
import { getAllPosts, PortfolioType } from "../../lib/api";

type PortfolioProps = {
  allPortfolios: PortfolioType[];
};

const Portfolio: NextPage<PortfolioProps> = ({
  allPortfolios,
}: PortfolioProps) => {
  return (
    <>
      <Meta title="Portfolio" />
      <Header />
      <HeroSection hero={"portfolio-list"}>
        <h1>Portfolio Highlights</h1>
        <p />
      </HeroSection>
      <PortfolioSection portfolios={allPortfolios} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const allPortfolios = getAllPosts(["title", "slug", "lead"]);

  return {
    props: { allPortfolios },
  };
}

export default Portfolio;
