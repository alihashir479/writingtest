import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex" />
            <meta name="description" content="Looking for essay help? You are at the right place! We provide plagiarism free and professionally written essays in Dubai. Order now or chat with our expert writers for details" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;