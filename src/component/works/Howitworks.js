import React from 'react';
const Howitworks = () => {
    const cards = [
        {
            number: '1',
            title: 'Effortless Ordering',
            content: 'GulfWrites ensure a seamless essay writing service. Place your order by providing the necessary details about your requirements and experience a prompt submission of your essay.'
        },
        {
            number: '2',
            title: 'Experts At Your Service',
            content: 'Our qualified professionals have the experience and knowledge to bring your ideas to life. Collaborate with your chosen writer to discuss your essay topic, provide insights, and clarify any specific instructions. '
        },
        {
            number: '3',
            title: 'Unlock Academic Excellence',
            content: 'Allow the magic to happen as your chosen writer conducts comprehensive research to create an engaging and insightful essay that highlights knowledge and ideas.'
        },
        {
            number: '4',
            title: 'Timely Submission',
            content: 'Our streamlined process ensures a seamless and trouble-free experience from beginning to end. Experience peace of mind with the reliable essay writing service, allowing you to confidently achieve your academic deadlines.'
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