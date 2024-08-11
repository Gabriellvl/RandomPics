import React from 'react';

const Modal = ({ show, onClose, content }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">&times;</button>
                <div className="modal-body">
                    <pre>{content}</pre>
                </div>
            </div>
        </div>
    );
};

export default Modal;
