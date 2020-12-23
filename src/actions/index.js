import axios from 'axios';

export const TOGGLE_ONLINE = "TOGGLE_ONLINE";
export const SET_ACCOUNT = "SET_ACCOUNT;"
export const SET_LOGOUT = "SET_LOGOUT";

export const getLogin = () => dispatch => {
    axios
        .get('endpoing/goes/here')
        .then(res => {
            dispatch({type: TOGGLE_ONLINE});
            dispatch({type: SET_ACCOUNT, payload: res.data.account})
        })
}