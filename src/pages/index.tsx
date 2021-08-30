import type { NextPage } from "next";
import {
  Meta,
  Header,
  HeroSection,
  BrandsSection,
  TestimonialsSection,
  Footer,
  AboutMeSummary,
  PortfolioSection,
} from "../components";
import { getAllPosts, PortfolioType } from "../lib/api";

type HomeProps = {
  allPortfolios: PortfolioType[];
};

const Home: NextPage<HomeProps> = ({ allPortfolios }: HomeProps) => {
  return (
    <>
      <Meta />
      <Header />
      <HeroSection hero={"home"}>
        <>
          <h2>Hello there, I am</h2>
          <h1>Lenka Wallace</h1>
          <h2>a UX Designer</h2>
          <p className="mt-5">
            <a href="#portfolio" className="btn btn-primary rounded scroll">
              View my work
            </a>
          </p>
        </>
      </HeroSection>
      <AboutMeSummary />
      <PortfolioSection portfolios={allPortfolios} />
      <BrandsSection />
      <TestimonialsSection />
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

export default Home;
