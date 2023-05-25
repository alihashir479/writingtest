import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance, FaEnvelopeOpen } from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';

const getServiceData = ServiceData;

const FooterOne = ({parentClass}) => {
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-top">
                <div className="footer-social-link" style={{marginBottom:'20px'}}>
                <h4 class="" style={{textAlign:'center'}}>Easy and Secured Payment Options</h4>
                        <ul className="list-unstyled">
                            <img src='/images/banks/dubai_islamic_bank.png' />
                            <img src='/images/banks/uae_change_bank.png' />
                            <img src='/images/banks/al_arabia_exchange.png' />
                            <img src='/images/banks/western_union.png' />
                            <img src='/images/banks/visa.png' />
                            <img src='/images/banks/master_card.png' />
                            <img src='/images/banks/paypal.png' />
                        </ul>
                </div>
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link to="https://facebook.com/"><FaFacebookF /></Link></li>
                            <li><Link to="https://twitter.com/"><FaTwitter /></Link></li>
                            <li><Link to="https://www.linkedin.com/"><FaLinkedin /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>We would love to hear from you and provide assistance with your queries. Feel free to contact us by filling in the details below.</p>
                                    <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Resourses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-study"}>Case Studies</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Portfolio</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">Axilthemes</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;