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
import FaqData from '../data/faq/FaqData.json';
import Feature from '../component/feature/feature';


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

