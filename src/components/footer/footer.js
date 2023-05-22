import React from 'react';
import "./footer.css"
import logo from "../../img/Group 8061.svg"
import whatsapp from "../../img/whatsapp.svg"
import telegram from "../../img/telegram.svg"
import instagram from "../../img/instagram.svg"
import layer from "../../img/layer1.svg"

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="footer-logo">
                        <img src={logo} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. Nunc
                            odio in a integer senectus integer massa euismod iaculis. </p>
                    </div>
                    <div className="sit-one-block">
                        <h1>Useful Links</h1>
                        <div className="home">
                            <div className="company">
                                <a href="#">Home</a>
                                <a href="#">About company</a>
                            </div>
                            <div className="server">
                                <a href="#">Services</a>
                                <a className="" href="#">Contacts</a>
                            </div>
                        </div>
                        <div className="block-img">
                            <img src={whatsapp} alt=""/>
                            <img src={telegram} alt=""/>
                            <img src={instagram} alt=""/>
                        </div>
                    </div>
                    <div className="from">
                        <h1>Subscribe</h1>
                        <form action="">
                            <input type="text" placeholder="Name"/>
                        </form>
                        <form action="">
                            <input type="number" placeholder="Phone"/>
                        </form>
                        <button className="btn-hover1"><span className="send">Send</span></button>
                    </div>
                </div>
            </div>
            <div className="lani"/>
            <div className="container right">
                <img src={layer} alt=""/>
                <h5 className="copy">Copy right 2023</h5>
                <h5 className="all">All rights reserved</h5>
            </div>
        </div>
    );
};

export default Footer;