//react
import React from 'react';
//router
import { Redirect } from 'react-router-dom';
//redux
import { connect } from 'react-redux';

const IsLoggedIn = (props) => {
    if (!props.token) return <Redirect to='/login' />
    return props.children
}
const mapStateToProps = (state) => {
    return {
        token: state.isLoggedIn.token
    }
}
export default connect(mapStateToProps)(IsLoggedIn);