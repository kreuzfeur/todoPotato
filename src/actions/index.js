const fetchLoginFormSuccess = () => {
    return {type: 'FETCH_LOGIN_FORM_SUCCESS'}
}
const fetchLoginFormPending = () => {
    return {type: 'FETCH_LOGIN_FORM_PENDING'}
}
const fetchLoginFormError = () => {
    console.log('err')
    return {type: 'FETCH_LOGIN_FORM_ERROR'}
}
const updateToken = (token) => {
    return {
        type: 'UPDATE_TOKEN',
        payload: token
    }
}
export {
    fetchLoginFormSuccess,
    fetchLoginFormPending,
    fetchLoginFormError,
    updateToken
}