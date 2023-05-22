import React from 'react';
import "./portfolio.css"
import image from '../../img/imageOne.svg'
import Testimonials from "../testimonials/testimonials";
import img from "../../img/Ellipse 18.svg"
import vectors from "../../img/Vectors.svg"
import ellipseOne from "../../img/Ellipse 19.svg"
import ellipse from "../../img/Ellipse 20.svg"
const Portfolio = (props) => {
    const test = [
        {
            id: 1,
            img:img,
            image:vectors,
            ellipseOne:ellipseOne,
            ellipse:ellipse,
            text:"Viktor Soi",
            data:"23.03.2023",
            project:"Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. Nunc odio in a integer senectus integer massa euismod iaculis. ",
        }
    ]
    return (
        <div id="portfolio">
            <h1 className="title-text">{props.h1}</h1>
            <div className="container">
                <div className="portfolio_block_text"
                     data-aos="zoom-out-right">
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_block">
                        <div className="wrapper">
                            <img className="wrapper_img" src={props.img} alt=""/>
                            <div className="honda">
                                <h3>{props.honda}</h3>
                                <h4>Lot: <span className="nom">№124</span></h4>
                            </div>
                            <div className="null">
                                <p>Auction date: <span className="mil">20.02.2023</span></p>
                                <h4>Run</h4>
                            </div>
                            <div className="prise">
                                <div className="prise">
                                    <h3>{props.prise}</h3>
                                    <h4>{props.priseOne}</h4>
                                </div>
                                <img className="alt_onr" src={image} alt=""/>
                            </div>
                            <div className="overlay">
                                <button className="btn-hover"><span className="span_more_hover">Read more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    test.map(el =>(
                        <Testimonials
                            img={el.img}
                            imade={el.image}
                            ellipseOne={el.ellipseOne}
                            ellipse={el.ellipse}
                            text={el.text}
                            data={el.data}
                            projext={el.project}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Portfolio;