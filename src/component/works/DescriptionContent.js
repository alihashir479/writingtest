import React from "react"
const DescriptionContent = () => {
    const content = [
        {
          title: 'Get Cheap academic help from professional writers',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          title: 'Get Cheap academic help from professional writers',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          title: 'Get Cheap academic help from professional writers',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
          title: 'Get Cheap academic help from professional writers',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        }
    ]
    return (<div className="container">
      <div className="row py--50">
        {content.map((item , idx) => (
            <div className="col-lg-6 mt--20" key={idx}>
                <h4>{item.title}</h4>
                <span>{item.description}</span>
            </div>
        ))}
      </div>
    </div>)
}

export default DescriptionContent