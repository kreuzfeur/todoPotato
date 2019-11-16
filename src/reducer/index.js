import updateHeader from './updateHeader';
const reducer = (state, action) => {
    return {
        header: updateHeader(state, action)
    }
}
export default reducer;