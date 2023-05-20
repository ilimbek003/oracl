import React from 'react';
import "./contact.css"
import email from "../../img/email.svg"
import clock from "../../img/clock.svg"
import lese from "../../img/12.svg"
import img from "../../img/Frame.svg"
const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="contact">
                    <h1>Contact us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. </p>
                </div>
                <div className="food">
                    <div>
                        <div className="email-one">
                            <div className="email">
                                <img src={email} alt=""/>
                                <h1>E-mail</h1>
                            </div>
                            <a className="mailto"
                               data-text="autokanada@gmail.com"
                               href = "mailto:autokanada@gmail.com">autokanada@gmail.com</a>
                        </div>
                        <div className="clock">
                            <div className="clock-one">
                                <img src={clock} alt=""/>
                                <h1>Working Hours</h1>
                            </div>
                            <h5>Monday-Friday</h5>
                            <h5>8:00AM-7:00PM</h5>
                        </div>
                    </div>
                    <div>
                        <div className="phone-one">
                            <div className="phone">
                                <img src={img} alt=""/>
                                <h1>Phone</h1>
                            </div>

                            <a href="tel:+1 431 688 84 84"
                               data-text="+1 431 688 84 84"
                               className="phones">+1 431 688 84 84</a>
                        </div>
                        <div className="clock">
                            <div className="clock-one">
                                <img src={lese} alt=""/>
                                <h1>Main Office</h1>
                            </div>
                            <h5>3525 North Harlem Avenue</h5>
                            <h5>Canada, IL, 6034</h5>
                        </div>
                    </div>
                    <div>
                        <iframe className="iframe "
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1462.0206174516934!2d74.67512453231814!3d42.871973803617564!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1677735376445!5m2!1sru!2skg"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;