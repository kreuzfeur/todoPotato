const updateElements = (state, action) => {
    if (state === undefined) {
        return {
            loginForm: {
                loading: false,
                hasError: false
            }
        }
    }
    switch (action.type) {
        case 'FETCH_LOGIN_FORM_SUCCESS':
            return {
                ...state.elements,
                loginForm: {
                    loading: false,
                    hasError: false
                }
            }
        case 'FETCH_LOGIN_FORM_PENDING':
            return {
                ...state.elements,
                loginForm: {
                    loading: true,
                    hasError: false
                }
            }
        case 'FETCH_LOGIN_FORM_ERROR':
            return {
                ...state.elements,
                loginForm: {
                    loading: false,
                    hasError: false
                }
            }
        default:
            return state.elements
    }
}
export default updateElements;