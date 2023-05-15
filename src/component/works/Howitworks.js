import React from 'react';
const Howitworks = () => {
    const cards = [
        {
            number: '1',
            title: 'Order us for your work',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            number: '2',
            title: 'Order us for your work',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            number: '3',
            title: 'Order us for your work',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            number: '4',
            title: 'Order us for your work',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
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