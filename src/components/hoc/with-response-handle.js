//react
import React from 'react';

const withResponseHandle = (Wrapped) => {
    return (props) => {
        const responseHandleSuccess = ({ data }) => {
            return data
        }
        const responseHandleError = ({ response: { status, data } }) => {
            switch (status) {
                case 401:
                case 403:
                    localStorage.clear();
                    return props.history.push('/login');
                default:
                    return data.error.message
            }
        }
        return (
            <Wrapped {...props} responseHandleSuccess={responseHandleSuccess} responseHandleError={responseHandleError} />
        )
    }
}
export default withResponseHandle;