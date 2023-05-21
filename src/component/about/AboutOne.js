import React from 'react';
import FormThree from '../contact/FormThree';


const AboutOne = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">About Us</span>
                                <h2 className="title mb--40">Your Trusted Partner For Academic Success</h2>
                                <p>With over 5 years of industry expertise, we have established ourselves as a reliable resource for students looking for high-quality essay writing services. We take pleasure in our meticulous attention to detail, extensive research, and dedication to fulfilling deadlines. What distinguishes us is our continuous commitment to customer satisfaction</p>
                                <p>We endeavor to exceed your expectations by creating high-quality work that highlights expertise and represents your distinct voice. Discover the expertise, dependability, and professionalism that have made us the go-to choice for essay writing services in Dubai and beyond.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Request a Call</h3>
                           <FormThree />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutOne;