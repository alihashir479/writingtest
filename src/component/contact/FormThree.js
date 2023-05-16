import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
        Your Message has been successfully sent.
        </Alert>
    )
}

const FormThree = () => {

    const form = useRef();

    const [ result, showresult ] = useState(false);

    const handleNumberChange = (e) => {
        
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yj5dgzp', 'template_hfduayo', form.current, 'WLENsTkBytC0yvItS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="contact-name" placeholder="Salem" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="contact-email" placeholder="Salem@gulfwrites.ae" required />
        </div>
        <div className="form-group">
            <label>Whatsapp</label>
            <input type="number" onChange={handleNumberChange} className="form-control" name="contact-whatsapp" placeholder="+971 55 102 1580" required />
        </div>
        <div className="form-group text-end">
            <button type="submit" className="axil-btn btn-fill-primary w-auto btn-primary" name="submit-btn">SEND</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormThree;