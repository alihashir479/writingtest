import React, {lazy, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import dayjs from 'dayjs';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
            Your Message has been successfully sent.
        </Alert>
    )
}

const FormOne = ({submitBtnText = "Get Free Quote"}) => {

    const paperOptions = [
        {label: 'APA', value: 'APA'},
        {label: 'MLA', value: 'MLA'},
        {label: 'Chicago', value: 'Chicago'},
        {label: 'Turabian', value: 'Turabian'},
        {label: 'Harvard', value: 'Harvard'},
        {label: 'Oxford', value: 'Oxford'},
        {label: 'Vancouver', value: 'Vancouver'},
        {label: 'CBE', value: 'CBE'},
        {label: 'Other', value: 'Other'}
    ]

    const paperTypeOptions = [
        {label: 'Essay', value: 'Essay'},
        {label: 'Book-Report', value: 'Book-Report'},
        {label: 'Research-paper', value: 'Research-paper'},
        {label: 'Term-paper', value: 'Term-paper'},
        {label: 'Thesis', value: 'Thesis'},
        {label: 'Dissertation', value: 'Dissertation'},
        {label: 'Course-Work', value: 'Course-Work'},
        {label: 'Research-Proposal', value: 'Research-Proposal'},
        {label: 'Dissertation-Proposal', value: 'Dissertation-Proposal'},
        {label: 'Assignment', value: 'Assignment'},
        {label: 'Other', value: 'Other'},
    ]

    const noOfPagesOptions = [... new Array(200)].map((item,idx) => {
        return {
            label: `${idx + 1} Page (s) / ${(idx + 1) * 250} Words`,
            value: idx + 1
        }
    })

    const AcademicLevelOptions = [
        {label: 'High School', value: 'high-school'},
        {label: 'College', value: 'College'},
        {label: 'Undergraduate', value: 'Undergraduate'},
        {label: 'Master', value: 'Master'},
        {label: 'PhD', value: 'PhD'},
        {label: 'Admission', value: 'Admission'},
    ]

    const deadlineOptions = [...new Array(12)].map((item,idx) => {
        if(idx == 0) return {value : '20', label: `20 Days / ${dayjs().add(20,'day').format('DD MMM, YYYY')}`}
        else if(idx == 1) return {value : '15', label: `15 Days / ${dayjs().add(15,'day').format('DD MMM, YYYY')}`}
        else if(idx == 2) return {value : '10', label: `10 Days /  ${dayjs().add(10,'day').format('DD MMM, YYYY')}`}
        else if(idx == 3) return {value : '7', label: `7 Days / ${dayjs().add(7,'day').format('DD MMM, YYYY')}`}
        else if(idx == 4) return {value : '6', label: `6 Days / ${dayjs().add(6,'day').format('DD MMM, YYYY')}`}
        else if(idx == 5) return {value : '5', label: `5 Days / ${dayjs().add(5,'day').format('DD MMM, YYYY')}`}
        else if(idx == 6) return {value : '4', label: `4 Days / ${dayjs().add(4,'day').format('DD MMM, YYYY')}`}
        else if(idx == 7) return {value : '3', label: `3 Days / ${dayjs().add(3,'day').format('DD MMM, YYYY')}`}
        else if(idx == 8) return {value : '2', label: `2 Days / ${dayjs().add(2,'day').format('DD MMM, YYYY')}`}
        else if(idx == 9) return {value : '24h', label: `24 Hours / ${dayjs().add(24,'hour').format('DD MMM, YYYY')}`}
        else if(idx == 10) return {value : '12h', label: `12 Hours / ${dayjs().add(12,'hour').format('DD MMM, YYYY')}`}
        else if(idx == 11) return {value : '6h', label: `6 Hours / ${dayjs().add(6,'hour').format('DD MMM, YYYY')}`}
    })

    const form = useRef();

    const [ result, showresult ] = useState(false);
    const [ totalAmount , setTotalAmount ] = useState(0)

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
            <label>Referencing Style</label>
            <select className="form-control" name="order_reference" placeholder="John Smith" required >
              <option selected>Paper Referencing</option>
              {paperOptions.map((paperOption, idx) => (
                <option value={paperOption.value} key={`${idx}-${paperOption.value}`}>{paperOption.label}</option>
              ))}
            </select>
        </div>
        <div className="form-group">
            <label>Paper type</label>
            <select type="email" className="form-control" name="order_document_type" required >
            <option selected>Select Paper</option>
            {paperTypeOptions.map((paperOption, idx) => (
                <option value={paperOption.value} key={`${idx}-${paperOption.value}`}>{paperOption.label}</option>
              ))}
            </select>
        </div>
        <div className="form-group">
            <label>No. of pages</label>
            <select type="tel" className="form-control" name="pages" required >
              <option selected>Select Page No</option>
              {noOfPagesOptions.map((paperOption, idx) => (
                <option value={paperOption.value} key={`${idx}-${paperOption.value}`}>{paperOption.label}</option>
              ))}
            </select>
        </div>
        <div className="form-group">
            <label>Academic level</label>
            <select type="tel" className="form-control" name="academic" required >
            <option selected>Please Select</option>
            {AcademicLevelOptions.map((paperOption, idx) => (
                <option value={paperOption.value} key={`${idx}-${paperOption.value}`}>{paperOption.label}</option>
              ))}
            </select>
        </div>
        <div className="form-group">
            <label>Deadline</label>
            <select type="deadline" className="form-control" name="contact-phone" required >
            <option selected>Please Select</option>
            {deadlineOptions.map((paperOption, idx) => (
                <option value={paperOption.value} key={`${idx}-${paperOption.value}`}>{paperOption.label}</option>
            ))}
            </select>
        </div>
        <div className="form-group">
            <button className="axil-btn  btn-fluid" name="submit-btn" onClick={(e) => e.preventDefault()}>Total Amount: {totalAmount}</button>
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">{submitBtnText}</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormOne;