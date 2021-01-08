import axios from 'axios';
import {useHistory} from 'react-router-dom'

export const TOGGLE_ONLINE = "TOGGLE_ONLINE";
export const SET_ACCOUNT = "SET_ACCOUNT;"
export const SET_LOGOUT = "SET_LOGOUT";

// much like setState functions, these custom hooks are exported and imported to specific locations in the App where we wish to modify state
// Making use of Thunk as middleware to intercept the call to update state and manipulate the values passed in before we set it. This is 
// mostly useful for making axios calls and setting that information to state, because without middleware we wouldn't be able to use axios.


export const getLogin = (account) => dispatch => {
    const history = useHistory();
    // We're sending up an account object to shoot over to the endpoint via axios
    console.log('getlogin called')
    axios
        .post('https://build-wk-anywhere-fitness.herokuapp.com/api/auth/login', account)
        .then(res => {
            dispatch({type: TOGGLE_ONLINE});
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("token", res.data.token);
        })
        .catch(err => {
            console.log(err);
        });
};

export const getLogout = () => dispatch => {
    dispatch({type: SET_LOGOUT})
    localStorage.removeItem("token");
    localStorage.removeItem("role");
};

export const checkToken = () => dispatch => {
    dispatch({type: TOGGLE_ONLINE})
};