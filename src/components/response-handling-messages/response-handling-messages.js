//react
import React from 'react';
//styles
import './response-error-handling.scss';
const ResponseHandlingMessages = ({ message, onClose, allertTypeClass, show}) => {
    return (
        <div className={`alert ${allertTypeClass} text-center mb-2 col-12 ${show}`} role="alert">
            <strong>{message}</strong>
            <button type="button" className="close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        
    )
}
export default ResponseHandlingMessages;