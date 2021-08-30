import React from "react";

const TestimonialsSection = () => (
  <section className="fdb-block">
        <div className="container">
            <div className="row justify-content-center pb-5">
                <div className="col-12 text-center">
                    <h1>Testimonials</h1>
                </div>
            </div>

            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-10 col-lg-12">
                    <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="7500">
                        <div className="carousel-inner">
                            <div className="carousel-item text-center active">
                                <p className="lead quot">
                                    <i className="fas fa-quote-left"></i>
                                    Thank you! Really fabulous work in such a short time. I am thoroughly
                                    impressed.<i className="fas fa-quote-right"></i>
                                </p>
                                <p><strong>Madeleine Evans
                                    </strong> <em className="ml-4">CEO & Founder at Levell</em>
                                </p>

                            </div>

                            <div className="carousel-item text-center">
                                <p className="lead quot">
                                    <i className="fas fa-quote-left"></i>
                                    Lenka has great people skills and
                                    empathy and her infectious attitude carried her team members through challenging
                                    times. I have no hesitation in recommending her as she will deliver on any task she
                                    sets her mind to and I would relish the opportunity to work with her again in the
                                    future.<i className="fas fa-quote-right"></i>
                                </p>
                                <p><strong>Chipo Mukonoweshuro
                                    </strong> <em className="ml-4">Programme Manager at Royal Bank of Scotland</em>
                                </p>

                            </div>

                            <div className="carousel-item text-center">
                                <p className="lead quot">
                                    <i className="fas fa-quote-left"></i>
                                    Hard working, honest and a thoroughly nice person, I have no hesitation in
                                    recommending Lenka. She is a person of thorough integrity; it’s been a privilege to
                                    have worked with her, and it was a pleasure to have had her on the team.
                                    <i className="fas fa-quote-right"></i>
                                </p>
                                <p><strong>Adrian Walton
                                    </strong> <em className="ml-4">Senior Business Leader at Royal Bank of Scotland</em>
                                </p>

                            </div>

                            <div className="carousel-item text-center">
                                <p className="lead quot">
                                    <i className="fas fa-quote-left"></i>
                                    Lenka is highly organised and carries herself excellently with people at all levels
                                    including executives. Lenka displays the utmost integrity at all times and is a
                                    great team player.
                                    <i className="fas fa-quote-right"></i>

                                </p>
                                <p><strong>Graham Hardy
                                    </strong> <em className="ml-4">Co-Founder & Owner at The Business Solution Hub</em>
                                </p>

                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        </div>
    </section>
);

export default TestimonialsSection;