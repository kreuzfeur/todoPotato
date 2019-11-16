const isLoggedIn = (state, action) => {
    if (state === undefined){
        return {
            token: localStorage.getItem('token')
        }
    }
    switch (action.type) {
        case 'UPDATE_TOKEN':
            return {
                token: action.payload
            }
        default:
            return state.isLoggedIn
    }
}

export default isLoggedIn;