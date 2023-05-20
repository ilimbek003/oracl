import React, {useState} from 'react';
import data from "../../data";
import "./header.css"
import logo from "../../img/Group 8061.svg"
import img from "../../img/Frame.svg"
import image from "../../img/Group.svg"
import image1 from "../../img/Group (2).svg"
import image2 from "../../img/Group 8183.svg"
import image3 from "../../img/Group (1).svg"
import layer from "../../img/Layer_1.svg"

const Header = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [inMenuClicked, setInMenuClicked] = useState(false)


    const updateMenu = () => {
        if (!inMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setInMenuClicked(!inMenuClicked)
    }


    return (
        <div id="header">
            <div className="container">
                <div className="nav">
                    <img className="logo" src={logo} alt=""/>
                    <div className="block">
                        <img src={logo} alt=""/>
                        <div className="text">
                            <a href="#">Home</a>
                        </div>
                        <div className="text">
                            <a href="#">About us</a>
                        </div>
                        <div className="text">
                            <a href="#">Services</a>
                        </div>
                        <div className="text">
                            <a href="#">Auction</a>
                        </div>
                        <div className="text">
                            <a href="#">Contacts</a>
                        </div>
                        <div className="block">
                            <img src={img} alt=""/>
                            <a href="tel:+1 431 688 8484">+1 431 688 8484</a>
                        </div>
                        <div className="img">
                            <img src={image} alt=""/>
                            <img src={image1} alt=""/>
                            <img src={image2} alt=""/>
                            <img src={image3} alt=""/>
                        </div>
                    </div>
                    <div>
                        <nav>
                            <div className="burger-menu" onClick={updateMenu}>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className={menu_class}>
                    <ul className="ul">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Auction</a></li>
                        <li className="li"><a href="#">Contacts</a></li>
                        <div className="big">
                            <div className="item">
                                <img src={img} alt=""/>
                                <h5>Phone</h5>
                            </div>
                            <a href="tel:+1 431 688 8484">+1 431 688 8484</a>
                        </div>
                        <div className="big">
                            <div className="item">
                                <img src={layer} alt=""/>
                                <h5>Main Office</h5>
                            </div>
                            <p>3525 North <br/> Harlem Avenue</p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;