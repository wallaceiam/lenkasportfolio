import type { NextPage } from "next";
import {
  Meta,
  Header,
  HeroSection,
  Footer,
  AboutMeSection,
  Motto,
  CTA
} from "../components";

const About: NextPage = () => {
  return (
    <>
      <Meta title="About Me" />
      <Header />
      <HeroSection hero={"about"}>
        <h1>About Me</h1>
      </HeroSection>
      <Motto />
      <AboutMeSection />
      <CTA />
      <Footer />
    </>
  );
};


export default About;
