import React from 'react';
import "./main.css"
import Slider from "react-slick";
import vector from "../../img/Vector 94.svg"
import Vector from "../../img/Безимени-1 1.svg"
import images from "../../img/image 7.svg"
import vector95 from "../../img/Vector 95.svg"
import vector96 from "../../img/Vector 96.svg"

const Main = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // fade: true
    };
    return (
        <div id="main">
            <div className="blocks">
                <div className="blocks">
                    <Slider {...settings}>
                        <div>
                            <div>
                                <img className="vector" src={vector} alt=""/>
                                <div>
                                    <img className="layer" src={Vector} alt=""/>
                                    <img className="images" src={images} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="vector" src={vector} alt=""/>
                                <div>
                                    <img className="layer" src={Vector} alt=""/>
                                    <img className="images" src={images} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="vector" src={vector} alt=""/>
                                <div>
                                    <img className="layer" src={Vector} alt=""/>
                                    <img className="images" src={images} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="vector" src={vector} alt=""/>
                                <div>
                                    <img className="layer" src={Vector} alt=""/>
                                    <img className="images" src={images} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="vector" src={vector} alt=""/>
                                <div>
                                    <img className="layer" src={Vector} alt=""/>
                                    <img className="images" src={images} alt=""/>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <img className="black" src={vector95} alt=""/>
                    <img className="black1" src={vector96} alt=""/>
                </div>
                <div className="name">
                    <h1 className="alabel">alabel</h1>
                    <h1 className="auto">auto</h1>
                    <h1 className="export">exp <span>ort</span></h1>
                </div>
                <div>
                    <div className="border">
                        <h1><span className="ca">ca</span>lculator</h1>
                        <div>
                            <h5 className="auction">Choose an auction</h5>
                            <select className="select">
                                <option>Impact</option>
                                <option>Пункт 2</option>
                            </select>
                        </div>
                        <div>
                            <h5 className="auction">Cities</h5>
                            <select className="select">
                                <option>Albany</option>
                                <option>Пункт 2</option>
                            </select>
                        </div>
                        <div>
                            <h5 className="auction">Car price in Canada/USA</h5>
                            <input className="input" type="text" placeholder="$ 2,600"/>
                        </div>
                        <div className="capacity">
                            <div>
                                <h5 className="auction">Year </h5>
                                <input className="tetx1" type="text" value="2008"/>
                            </div>
                            <div>
                                <h5 className="auction">Engine capacity </h5>
                                <input className="tetx" type="text" value="2008"/>
                            </div>
                        </div>
                        <div>
                            <h5 className="auction tion">Fuel type</h5>
                            <select className="select">
                                <option>Diesel</option>
                                <option>Пункт 2</option>
                            </select>
                        </div>
                        <div className="amount">
                            <h5 className="auction">total amount</h5>
                            <h5 className="auction1">$ 18, 560</h5>
                        </div>
                        <div className="amount">
                            <h5 className="auction">Deposit</h5>
                            <h5 className="auction1"> $ 1,856</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;