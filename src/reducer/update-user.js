const updateHeader = (state, action) => {
    if (state === undefined){
        return {
            username: null,
            role: null
        }
    }
    switch (action) {
        default:
            return state.user
    }
}

export default updateHeader;