//react
import React, { Component } from 'react';
//components
import ResponseHandlingMessage from '../response-handling-messages';
export default class ResponseHandlingMessagesContainer extends Component {
    onClose = (id) => {

    }
    render() {
        const { errors, success } = this.props;
        let errorItems = null;
        let successItems = null;

        if (errors) {
            if (typeof errors === 'string') {
                errorItems = (<ResponseHandlingMessage message={errors} allertTypeClass="alert-danger" onClose={this.onClose} />)
            } else if (typeof errors === 'object') {
                let errorItems = errors.map(err => console.log(err))
            }
        }
        return (
            <div>
                {errorItems}
                {successItems}
            </div>
        )
    }
}