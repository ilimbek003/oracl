import React from 'react';
import "./section.css"
import frame from "../../img/Frame120.svg"
import frame1 from "../../img/17 quality.svg"
import frame2 from "../../img/Layer_113.svg"
import frame3 from "../../img/Layer_2.svg"
import frame4 from "../../img/Value_x5F_proposition.svg"
import rec from "../../img/Rectangle 325261.svg"
import Portfolio from "../Portfolio/portfolio";

const Section = (props) => {

    const dataProps = [
        {
            h1: 'Portfolio',
            img: rec,
            honda: 'Honda civic si',
            mil: "Mii 1.0 ASG 3 porte Chic",
            prise: "Price:",
            priseOne: '$ 5 260'
        },
    ]

    return (
        <div id="about">
            <div className="slect">
                <h3>{props.item}</h3>
                <h2>{props.items}</h2>
            </div>
            <div className="bac"/>
            <div className="frame">
                <div className="ell" data-aos="flip-up">
                    <p>{props.pro}</p>
                </div>
                <div className="d-flex">
                    <div className="block-title" data-aos="flip-left">
                        <img src={frame} alt=""/>
                        <p>Lower prices due to favorable exchange rate</p>
                    </div>
                    <div className="block-title" data-aos="flip-right">
                        <img src={frame1} alt=""/>
                        <p>High-quality vehicles known for durability and equipped with unique features</p>
                    </div>
                    <div className="block-title" data-aos="flip-down">
                        <img src={frame2} alt=""/>
                        <p>Wide selection of used cars, including luxury and economy models</p>
                    </div>
                    <div className="block-title" data-aos="zoom-in">
                        <img src={frame3} alt=""/>
                        <p>Straightforward export process with help from a reliable company</p>
                    </div>
                    <div className="block-title" data-aos="zoom-in-up">
                        <img src={frame4} alt=""/>
                        <p>Great condition due to strict safety and emission standards.
                        </p>
                    </div>
                </div>
            </div>
            <div className="center"/>
            {
                dataProps.map(el => (
                     <Portfolio
                         h1={el.h1}
                         img={el.img}
                         honda={el.honda}
                         mil={el.mil}
                         prise={el.prise}
                         priseOne={el.priseOne}
                     />
                ))
            }
        </div>
    );
};

export default Section;