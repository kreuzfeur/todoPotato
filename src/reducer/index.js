import updateHeader from './update-header';
import updateUser from './update-user';
import updateIsLoggedIn from './update-is-logged-in';
import updateElements from './update-elements.js';

const reducer = (state, action) => {
    return {
        isLoggedIn: updateIsLoggedIn(state, action),
        elements: updateElements(state, action),
        user: updateUser(state, action),
        header: updateHeader(state, action)
    }
}
export default reducer;