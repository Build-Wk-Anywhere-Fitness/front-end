import axios from 'axios';

export const TOGGLE_ONLINE = "TOGGLE_ONLINE";
export const SET_ACCOUNT = "SET_ACCOUNT;"
export const SET_LOGOUT = "SET_LOGOUT";

// much like setState functions, these custom hooks are exported and imported to specific locations in the App where we wish to modify state
// Making use of Thunk as middleware to intercept the call to update state and manipulate the values passed in before we set it. This is 
// mostly useful for making axios calls and setting that information to state, because without middleware we wouldn't be able to use axios.

export const getLogin = () => dispatch => {
    axios
        .get('endpoing/goes/here')
        .then(res => {
            dispatch({type: TOGGLE_ONLINE});
            dispatch({type: SET_ACCOUNT, payload: res.data.account})
        })
}