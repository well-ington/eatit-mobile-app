import { createStore, Reducer, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { TACTIONS, ACTIONS } from "../actions/main";

export type TinitialState = {
    auth: number;
        name: string;
        email: string;
        phone: string;  
}

const initialState = {
    auth: -1,
    name: '',
    email: '',
    phone: ''
}

const main: Reducer<TinitialState, TACTIONS> = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.LOG_IN:
            // const user = {...state};
            // user.userInfo = {}
            return {
                ...state,
                ...action.payload
            }
        case ACTIONS.LOG_OFF:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export default createStore(main, applyMiddleware(thunk));