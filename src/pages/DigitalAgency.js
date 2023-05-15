import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import AboutOne from '../component/about/AboutOne';
import BannerOne from '../component/banner/BannerOne';
import ServicePropOne from '../component/service/ServicePropOne';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import Howitworks from '../component/works/Howitworks';
import DescriptionContent from '../component/works/DescriptionContent';
import FaqOne from '../component/faq/FaqOne';
import TestimonialPropOne from '../component/testimonial/TestimonialPropOne'


const DigitalAgency = () => {

    return (
        <>
        <SEO title="Essay Writing In Dubai Providing Top-Class Essays Online Written By Professional Writers"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BannerOne />
            <Howitworks />
            <DescriptionContent />
            <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can help you with"
                        description="Nulla facilisi. Nullam in magna id dolor 
                        blandit rutrum eget vulputate augue sed eu imperdiet."
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className='row'>
                        <ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="3" showMoreBtn={false} />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul>
            </div>
            <AboutOne />
            <FaqOne />
            <TestimonialOne /> 
        <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default DigitalAgency;

