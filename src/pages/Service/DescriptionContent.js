import React from "react"
const DescriptionContent = () => {
    const content = [
        {
          title: 'Get Professional Assignment Writing Services',
          description: 'We acknowledge the value of having access to trustworthy advice, which is why our team is composed of subject matter experts with extensive experience in their respective fields. If you need assistance with complex projects, essay writing, research papers, or any other academic activity, our professionals are ready to assist you with their extensive knowledge and valuable insights.'
        },
        {
            title: 'Get Timely Access To Your Assignments',
            description: 'When it comes to academic tasks, we realize the crucial relevance of fulfilling deadlines. Our expert professionals work tirelessly to prioritize efficiency and punctuality, ensuring that your tasks are finished and submitted on time. To stay on track, we stick to stringent deadlines and use excellent project management strategies.Trust our services and stay ahead in your academic pursuits.'
        },
        {
            title: 'Get Assignments Based On Your Requirements',
            description: 'We understand that every student and institutions have their own requirements and with our individualized approach, we will work closely with you to identify your specific needs and create a customized plan to deliver your assignments based on conditions. Together lets unlock the door to academic excellence and set you on the path of success. '
        },
    ]
    return (<div className="container pb--50">
      <div className="row">
        {content.map((item , idx) => (
            <div className={`col-lg-12 ${idx != 0 ? 'mt--20' : ''}`} key={idx}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>
        ))}
      </div>
    </div>)
}

export default DescriptionContent