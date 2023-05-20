import React, {useState} from 'react';
import Slider from "react-slick";
import './slick.css'
import rec from "../../img/Rectangle 325277.svg"
import rec1 from "../../img/Vector 102.svg"
import About from "../about/about";


const Slick = (props) => {
    const settings = {
        dots: true,
        arrows: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        draggable: true,
        touchMove: true,
        infinite: false,
        speed: 300,
    };
    const propsOne = [
        {
            title: "About",
            pro: "Company",
            item: "Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. ",
            img: rec1,
            image: rec,
            project: "Our company was founded in 2020 as an exporter of used vehicles from Canada. We specialize in purchasing cars from Canadian auctions, as well as from official dealers and private individuals. Our goal is to offer our clients a wide selection of high-quality vehicles at competitive prices.",
            our: "Read more",
        }
    ]
    console.log(props)
    return (
        <div>
            <div className="container props">
                <Slider {...settings}>
                    <div className="clas">
                        <div>
                            <img src={props.img} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img1} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img2} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img3} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img4} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img5} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img6} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img7} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img8} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img1} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img2} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img3} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img4} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img5} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img6} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img7} alt=""/>
                        </div>
                    </div>
                    <div className="clas">
                        <div>
                            <img src={props.img8} alt=""/>
                        </div>
                    </div>
                </Slider>
                {
                    propsOne.map(el => (
                        <div>
                            <About
                                title={el.title}
                                pro={el.pro}
                                item={el.item}
                                img={el.img}
                                image={el.image}
                                project={el.project}
                                our={el.our}
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Slick;