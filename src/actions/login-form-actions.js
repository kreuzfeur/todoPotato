const fetchLoginFormSuccess = () => {
    return {type: 'FETCH_LOGIN_FORM_SUCCESS'}
}
const fetchLoginFormPending = () => {
    return {type: 'FETCH_LOGIN_FORM_PENDING'}
}
const fetchLoginFormError = (error) => {
    return {
        type: 'FETCH_LOGIN_FORM_ERROR',
        payload: error
    }
}
const changeLoginInputValue = (val) => {
    return {
        type:'CHANGE_LOGIN_INPUT_VALUE',
        payload: val
    }
}
const changePasswordInputValue = (val) => {
    return {
        type:'CHANGE_PASSWORD_INPUT_VALUE',
        payload: val
    }
}
export {
    fetchLoginFormSuccess,
    fetchLoginFormPending,
    fetchLoginFormError,
    changePasswordInputValue,
    changeLoginInputValue
}