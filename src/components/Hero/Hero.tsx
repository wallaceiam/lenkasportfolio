import React from "react";

type HeroProps = {

};

const HeroSection = ({}: HeroProps) => (
    <section className="fdb-block bg-dark fdb-viewport hero home">
        <div id="overlay"></div>
        <div className="container align-items-center justify-content-center d-flex">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <h2>Hello there, I am</h2>
                    <h1>Lenka Wallace</h1>
                    <h2>a UX Designer</h2>
                    <p className="mt-5"><a href="#portfolio" className="btn btn-primary rounded scroll">View my work</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default HeroSection;