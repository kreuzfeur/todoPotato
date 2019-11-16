//react
import React, { Component } from 'react';
//components
import ErrorIndicator from '../error-indicator';
//styles
import './error-boundry.scss';

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    }
    componentDidCatch() {
        this.setState({ hasError: true})
    }
    render() {
        const { hasError } = this.state;
        if (hasError){
            return (
                <section className='errorBoundry'>
                    <ErrorIndicator />
                </section>
            )
        } 
        return this.props.children;
    }
}