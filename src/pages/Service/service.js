import React from 'react';
import FooterOne from '../../common/footer/FooterOne';
import HeaderOne from '../../common/header/HeaderOne';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import SEO from '../../common/SEO';
import Howitworks from '../../component/works/Howitworks';
import ServiceBanner from '../../component/banner/ServiceBanner';
import FaqOne from '../../component/faq/FaqOne';
import TestimonialOne from '../../component/testimonial/TestimonialOne';
import FaqData from '../../data/faq/FaqServiceData.json';
import DescriptionContent from './DescriptionContent';
import Feature from '../../component/feature/feature';


const Service = () => {

    return (
        <>
        <SEO title="Service one" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <ServiceBanner />
            <HeaderOne />
            <div className='py--50'>
              <Howitworks />
            </div>
            <DescriptionContent />
            <FaqOne data={FaqData} />
            <Feature />
            <TestimonialOne /> 
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default Service;