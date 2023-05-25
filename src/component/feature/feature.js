import SectionTitle from "../../elements/section-title/SectionTitle"
import ServicePropOne from "../service/ServicePropOne"
import React from "react"
const feature = () => {
    return (<>
    <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        title="Unveiling the hidden perks of our services"
                        description=""
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
    </>)
}

export default feature