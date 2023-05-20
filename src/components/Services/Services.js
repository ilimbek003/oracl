import React from 'react';
import "./services.css"
import data from "../../data";
import sW from "../../img/s-w150 (2).svg"
import sW1 from "../../img/s-w150 (8).svg"
import sW2 from "../../img/s-w150 (6).svg"
import sW3 from "../../img/s-w150 (9).svg"
import sW4 from "../../img/Lexus-logo.svg"
import sW5 from "../../img/GMC-logo.svg"
import sW6 from "../../img/s-w150 (4).svg"
import sW7 from "../../img/subaru-emblem.svg"
import sw from "../../img/subaru-emblem.svg"

import Slick from "../sider/slick";
const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <div className="our">
                    <h3>Our</h3>
                    <h1>Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. </p>
                </div>
                <div className="flex">
                    {
                        data.map(el => (
                            <div className="services" data-aos="zoom-out-up">
                                <div className="sit">
                                    <img src={el.img} alt=""/>
                                    <h2 className="title">{el.title}</h2>
                                    <p>{el.pro}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div data-aos="fade-in" className="bar">
                    <Slick
                        img={sW}
                        img1={sW1}
                        img2={sW2}
                        img3={sW3}
                        img4={sW4}
                        img5={sW5}
                        img6={sW6}
                        img7={sW7}
                        img8={sw}
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;