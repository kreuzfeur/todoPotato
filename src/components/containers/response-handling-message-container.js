//react
import React, { Component } from 'react';
//components
import ResponseHandlingMessage from '../response-handling-messages';
export default class ResponseHandlingMessagesContainer extends Component {
    state = {
        show: false
    }
    onClose = (id) => {
        console.log(id)
    }
    componentDidMount () {
        console.log('mount')
    }
    render() {
        const { errors, success } = this.props;
        console.log(this.props)
        let errorItems = null;
        let successItems = null;
        if (errors) {
            if (typeof errors === 'string') {
                setTimeout(() => {
                    if (!this.state.show) {
                        this.setState({ show: "show" })
                    }
                }, 1)
                errorItems = (<ResponseHandlingMessage message={errors} allertTypeClass="alert-danger" onClose={this.onClose} show={this.state.show}/>)
            } else if (typeof errors === 'object') {

                errorItems = errors.map((error, idx) => console.log(error))
            }
        }
        return (
            <section className="responseHandlingMessage">
                {errorItems}
                {successItems}
            </section>
        )
    }
}