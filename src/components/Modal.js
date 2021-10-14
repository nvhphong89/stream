import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props =>{
    return ReactDOM.createPortal(
        <div className="ui dimer modals visible active">
            Test Modal
        </div>
    );
};

export default Modal;