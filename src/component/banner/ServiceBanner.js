import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import FormOne from '../contact/FormOne';
import { AiFillStar } from "react-icons/ai";
import ModalOne from '../modals/ModalOne';
import { useState } from 'react';
import './BannerOne.css'


const ServiceBanner = () => {
    const [modalShow, setModalShow] = useState(false)
    const onClose = () => {
        setModalShow(false)
    }
    return (
        <>
        <ModalOne show={modalShow} onClose={onClose} />
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                <div className='col-lg-12 justify-content-center align-items-center mt--20 mb--20 star-title' style={{display: 'flex'}}>
                  <div> {[...new Array(5)].map((item, idx) => (<AiFillStar key={idx} style={{color: 'yellow'}} />))} </div>
                   <p className='ml--5 mb--0'> - Awarded as #1 in Academic Writing Service </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                                <h1 className="title">Expert Assignment Help Services</h1>
                                <div className='order-form-mobile'>
                                <div className='contact-form-box shadow-box py--20 px--50'>
                                  <h3 className='mb--10'>Place order</h3>
                                    <FormOne submitBtnText='Proceed Now'/>
                                </div>
                                </div>
                                <span className="subtitle">Our professional team of assignment helpers are dedicated to providing assistance to those seeking help. We ensure that every individual gets the assistance which they need to excel in academic endeavors.</span>
                                <button className="axil-btn btn-fill-primary btn-large" onClick={() => {setModalShow(true)}}>Get Samples</button>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                                <div className='contact-form-box shadow-box py--20 px--50 order-form-desktop'>
                                  <h3 className='mb--10'>Place order</h3>
                                 <FormOne submitBtnText='Proceed Now'/>
                                </div>
                            <ul className="list-unstyled shape-group">
                                <li className="shape shape-1">
                                    <AnimationOnScroll animateIn="slideInLeft" duration={1} delay={800} animateOnce={true}>
                                        <img src={process.env.PUBLIC_URL + "/images/banner/chat-group.png"} alt="chat" />
                                    </AnimationOnScroll>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-21">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
        </>
    )
}

export default ServiceBanner;