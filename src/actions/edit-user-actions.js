const editUserDataPending = () => {
    return {
        type: 'EDIT_USER_DATA_PENDING'
    }
}
const editUserDataSuccess = (data) => {
    return {
        type: 'EDIT_USER_DATA_SUCCESS',
        payload: data
    }
}
export {
    editUserDataPending,
    editUserDataSuccess
}