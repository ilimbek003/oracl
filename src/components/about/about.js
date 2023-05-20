import React from 'react';
import "./about.css"
import Section from "../section/Section";
const About = (props) => {

    const about =[
        {
            id:1,
            item:"Why",
            items:"you should consider purchasing a car from Canada?",
            pro:"Cars in Canada are often priced lower than in other countries due to the favorable exchange rate, which makes buying a car from Canada a more cost-effective option. Additionally, Canada has a reputation for producing high-quality vehicles that are built to last, making them a reliable choice for buyers. With a wide selection of used cars available, from luxury vehicles to economy cars, and an easy export process with the help of a reputable export company, purchasing a car from Canada can be a smart and hassle-free decision.",
        },

    ]

    return (
        <div id="about">
            <img className="imgs" src={props.img} alt=""/>
            <div className="container">
                <div className="our-one"  data-aos="fade-up">
                    <h3>{props.title}</h3>
                    <h1>{props.pro}</h1>
                    <p className="items">{props.item}</p>
                </div>
                <div className="bash">
                    <div className='der' data-aos="fade-right">
                        <img src={props.image} alt=""/>
                        <div className="alt"/>
                    </div>
                    <div className="der" data-aos="fade-left">
                        <p className="ject">{props.project}</p>
                        {/*<button className="fill-left"><span>{props.our}</span></button>*/}
                        <button className="btn"><span className="span_our">{props.our}</span></button>
                    </div>
                </div>
            </div>
            <div className="vector-one"/>
            {
                about.map(el =>(
                    <Section
                    item={el.item}
                    items={el.items}
                    pro={el.pro}
                    />
                ))
            }
        </div>
    );
};

export default About;