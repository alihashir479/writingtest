import React from 'react';
import FooterOne from '../../common/footer/FooterOne';
import HeaderOne from '../../common/header/HeaderOne';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import SEO from '../../common/SEO';
import Howitworks from './Howitworks';
import ServiceBanner from '../../component/banner/ServiceBanner';
import FaqOne from '../../component/faq/FaqOne';
import TestimonialOne from '../../component/testimonial/TestimonialOne';
import FaqData from '../../data/faq/FaqServiceData.json';
import DescriptionContent from './DescriptionContent';
import Feature from '../../component/feature/feature';
import TestimonialData from "../../data/testimonial/TestimonialServiceData.json";
import { Helmet } from 'react-helmet';

const Service = () => {

    return (
        <>
        <Helmet>
          <title> Assignment Help in Dubai & UAE - Professional Writing Service </title>
        </Helmet>
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
            <TestimonialOne data={TestimonialData} /> 
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default Service;