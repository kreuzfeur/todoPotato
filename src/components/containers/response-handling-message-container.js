//react
import React, { Component } from 'react';
//components
import ResponseHandlingMessage from '../response-handling-messages';
export default class ResponseHandlingMessagesContainer extends Component {
    state = {
        show: false,
        errors: null,
        success: null
    }
    componentDidUpdate(prevProps) {
        if (prevProps.errors !== this.props.errors || prevProps.success !== this.props.success) {
            const { errors, success } = this.props;
            this.setState({
                errors,
                success
            })
        }
    }
    onClose = (id, type) => {
        const newErrors = {};
        const {errors} = this.state;
        if(type){
            const deleteElement = errors[type][id];
            for (const key in errors) {
                errors[key].forEach(elt => {
                    if (elt !== deleteElement){
                        newErrors[key] = [elt]
                    }
                })
            }
        }
        this.setState({errors: newErrors})
    }
    render() {
        const { errors, success } = this.state;
        let errorItems = null;
        let successItems = null;
        if (errors || success) {
            
            if (typeof errors === 'string') {
                setTimeout(() => {
                    if (!this.state.show) {
                        this.setState({ show: "show" })
                    }
                }, 1)
                errorItems = (<ResponseHandlingMessage message={errors} allertTypeClass="alert-danger" onClose={this.onClose} show={this.state.show} id={0} />);
            } else if (typeof errors === 'object') {
                errorItems = [];
                for (const type in errors) {
                    errors[type].forEach((error, id) => {
                        setTimeout(() => {
                            if (!this.state.show) {
                                this.setState({ show: "show" })
                            }
                        }, 1)
                        errorItems.push(
                            <ResponseHandlingMessage 
                                message={error} 
                                allertTypeClass="alert-danger" 
                                onClose={this.onClose} 
                                show={this.state.show} 
                                id={id} 
                                key={Math.random() * 10} 
                                type={type} />)
                    });
                }
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
