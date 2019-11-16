//react
import React from 'react';
//styles
import './error-indicator.scss';

const ErrorIndicator = () => {
    return (
        <section className='errorIndicator text-danger'>
            <img src="./img/error.png" alt="error indicator"/>
            <h2>Что-то пошло не так</h2>
            <i className="fas fa-bug"></i>
        </section>
    )
}
export default ErrorIndicator;