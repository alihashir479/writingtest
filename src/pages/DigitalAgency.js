import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import AboutOne from '../component/about/AboutOne';
import BannerOne from '../component/banner/BannerOne';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import Howitworks from '../component/works/Howitworks';
import DescriptionContent from '../component/works/DescriptionContent';
import FaqOne from '../component/faq/FaqOne';
import FaqData from '../data/faq/FaqData.json';
import Feature from '../component/feature/feature';
import {Helmet} from "react-helmet";


const DigitalAgency = () => {

    return (
        <>
        <Helmet>
        <title>Essay Writing Service in UAE: Dubai's #1  Writing Services</title>
        <meta name="description" content="Get top-quality Essay Writing Service in UAE, Dubai. Our affordable and reliable writing services deliver excellent academic papers. Boost your grades today!" />
      </Helmet>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BannerOne />
            <Howitworks />
            <DescriptionContent />
            <Feature />
            <AboutOne />
            <FaqOne data={FaqData} />
            <TestimonialOne /> 
        <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default DigitalAgency;

