import React from "react";

type HeroProps = {
    hero: string;
    children: React.ReactNode;
};

const HeroSection = ({hero, children}: HeroProps) => (
    <section className={`fdb-block bg-dark fdb-viewport hero ${hero}`}>
        <div id="overlay"></div>
        <div className="container align-items-center justify-content-center d-flex">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10 col-lg-8">
                    {children}
                </div>
            </div>
        </div>
    </section>
)

export default HeroSection;