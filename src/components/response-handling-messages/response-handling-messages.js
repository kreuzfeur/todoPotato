import React from 'react';

const ResponseHandlingMessages = ({ message, onClose, allertTypeClass }) => {
    return (
        <div className={`alert ${allertTypeClass} text-center`} role="alert">
            <strong>{message}</strong>
            <button type="button" className="close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
export default ResponseHandlingMessages;