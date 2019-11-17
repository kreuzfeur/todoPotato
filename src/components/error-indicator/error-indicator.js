//react
import React from 'react';
//styles
import './error-indicator.scss';
import errorImg from '../../img/error.png';

const ErrorIndicator = () => {
    return (
        <section className='errorIndicator text-danger'>
            <img src={errorImg} alt="error indicator"/>
            <h2>Что-то пошло не так</h2>
            <i className="fas fa-bug"></i>
        </section>
    )
}
export default ErrorIndicator;