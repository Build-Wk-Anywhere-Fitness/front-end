// This slice of state will be global and passed to specific components that need it rather than passing it through prop drilling
import { TOGGLE_ONLINE, SET_ACCOUNT, SET_LOGOUT } from '../actions/index';

const initialState = {
    username: "",
    accountStatus: "",
    online: true,
    profile: {}
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(TOGGLE_ONLINE):
            return ({
                ...state,
                online: true
            })
        case(SET_LOGOUT):
            state = initialState;
            return;
        case(SET_ACCOUNT):
            return ({
                ...state,
                username: action.payload.username, accountStatus: action.payload.accountStatus, profile: action.payload.profile
            })
        default:
            return state;
    }
}