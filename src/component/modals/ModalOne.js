import React from "react";
import FormThree from "../contact/FormThree";
import './modal.css'

const ModalOne = ({show, onClose}) => {

    if(!show) {
        return false
    }
    return (<>
      <div className="modal">
        <div className="modal-content">
            <div className="modal-header">

            </div>
            <div className="modal-body">
               <FormThree />
            </div>
            <div className="modal-footer">
              <button className="axil-btn btn-fill-white" onClick={onClose}>Close</button>
            </div>
        </div>
      </div>
    </>)
}

export default ModalOne