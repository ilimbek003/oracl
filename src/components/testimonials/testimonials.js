import React from 'react';
import './testimonials.css'
import Slider from "react-slick";
import Contact from "../ContactUs/Contact";
const Testimonials = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div id="testimonials">
            <div className="container">
                <div className="clients">
                    <h2>Testimonials</h2>
                    <h1>What say our clients</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. </p>
                </div>
                <div data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom">
                    <Slider {...settings} >
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.img} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.ellipseOne} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.ellipse} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.ellipseOne} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.ellipse} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.ellipseOne} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.ellipse} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.ellipseOne} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="slick-sliders">
                                    <div className="flex-block">
                                        <div>
                                            <img className="flex-block-img" src={props.ellipse} alt=""/>
                                            <img className="flex-block-img-one" src={props.imade} alt=""/>
                                        </div>
                                        <div className="flex-block-one">
                                            <h4>{props.text}</h4>
                                            <h5>{props.data}</h5>
                                        </div>
                                    </div>
                                    <p>{props.projext}</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
             <Contact/>
            </div>
        </div>
    );
};

export default Testimonials;