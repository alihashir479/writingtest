import React from 'react';
const Howitworks = () => {
    const cards = [
        {
            number: '1',
            title: 'Easy Ordering',
            content: 'As an assignment help service, we strive to provide you convenience and               make the assignment ordering process as effortless as possible. Hand over your assignments to us and let us take care of your academic needs.'
        },
        {
            number: '2',
            title: 'Expert Assistance',
            content: 'To tackle academic challenges, our service provides support of knowledgeable and professional individuals. Our expert assistance can give you confidence in your learning journey and propel you towards academic excellence.'
        },
        {
            number: '3',
            title: 'Excel Academically ',
            content: 'We understand the unique needs of every student and we are here to empower you with the tools and knowledge to excel in your studies. With our proven strategies, we provide assignments based on your personal requirements.'
        },
        {
            number: '4',
            title: 'Timely Submission',
            content: 'You can confidently rely on us with your assignments as our main focus is to deliver you assignments on time. Our streamlined process enables us to cater the complexities of assignments with a consistent record of timely submissions.'
        },
    ]
    const numberStyles = {background: 'linear-gradient(90deg, #5050fd 0%, rgb(32 32 246 / 70%) 70.31%)', marginBottom: '0'}
    return (
    <div className="container mt--80">
    <div className=''>
        <h2 className='' style={{textAlign: 'center'}}>How it Works</h2>
    </div>
    <div className="row">
     {cards.map((card,idx) => (
     <div className="col-xl-3 col-lg-4 col-md-6" key={idx}>
        <div className="project-grid ">
        <div className="about-quality justify-content-center" style={{marginBottom: '0', display: 'flex'}}>
                <h3 className='sl-number' style={numberStyles}>{card.number}</h3>
        </div>
        <div className="content" style={{paddingLeft: '20px', paddingRight: '20px'}}>
            <h4 className="title">
                <a href="/project-details/creative-agency">{card.title}</a>
            </h4><span className="subtitle">
            <span>{card.content}</span>
            </span></div>
        </div>
    </div>
     ))}
    </div>
    </div>)
}

export default Howitworks