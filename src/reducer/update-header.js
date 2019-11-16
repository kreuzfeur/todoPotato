const updateHeader = (state, action) => {
    if (state === undefined){
        return {
            hasError: false,
            data: {}
        }
    }
    switch (action) {
        default:
            return state.header
    }
}

export default updateHeader;