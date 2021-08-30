/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutMeSummary = () => (
  <section className="fdb-block">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0">
                    <img alt="image" className="img-fluid round" src="/imgs/misc/about.png"
                        srcSet="/imgs/misc/about.png 1x, /imgs/misc/about@2x.png 2x" />
                </div>

                <div className="col-12 ml-auto col-md-6 col-lg-5">
                    <h1>About me</h1>
                    <p className="lead">I am a UX Designer who has worked for large organisations such as Royal Bank of
                        Scotland, Lloyds or Amazon. I transferred into the UX profession from running large business
                        change projects. I am driven to create, improve and deliver user experience by implementing UX
                        processes from research to release for digital experiences (mobile/desktop).</p>
                    <p className="lead"><a href="/about">Read More <i className="fas fa-angle-right"></i></a></p>
                </div>
            </div>
        </div>
    </section>
)

export default AboutMeSummary;