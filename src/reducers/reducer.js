// This slice of state will be global and passed to specific components that need it rather than passing it through prop drilling
import { TOGGLE_ONLINE, SET_ACCOUNT, SET_LOGOUT } from '../actions/index';

let token = localStorage.getItem("token");

const initialState = {
    online: (token) ? true : false,
}

// Using a reducer to set up several hooks throughout the application to modify global state through specific actions.

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(TOGGLE_ONLINE):
            console.log(action.payload)
            return ({
                ...state,
                online: true
            })
        case(SET_LOGOUT):
            return ({
                ...state,
                online: false
            })
        // case(SET_ACCOUNT):
            // Set Account action not in use, could be used for setting data to state. Currently we are rendering data to the page.
            // return state;
        default:
            return state;
    }
}