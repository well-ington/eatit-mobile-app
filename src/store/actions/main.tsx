const LOG_IN: string = 'LOG-IN';
const LOG_OFF: string = 'LOG-OFF';
const UPDATE_USER: string = 'UPDATE-USER'
const SELECT_RESTAURANT: string = 'SELECT-RESTAURANT';



export const ACTIONS = {
    LOG_IN, LOG_OFF, UPDATE_USER, SELECT_RESTAURANT
}

type TSELECT_RESTAURANT = {
    type: string;
    payload: {
        selectedRestaurant: number;
    }
}

type TUPDATE_USER = {
    type: string;
    payload: {
        name?: string;
        mail?: string;
        phone?: string;
        cpf?: string;
    }
}

type TLOG_IN = {
    type: string;
    payload: {
        auth: number;
        email?: string;
        phone?: string;
    }
}

type TLOG_OFF = {
    type: string;
    payload?: any;
}


export type TACTIONS = TLOG_IN | TLOG_OFF | TUPDATE_USER | TSELECT_RESTAURANT; 

export const doLogin = (type: string, userInfo?: any) => {
    return async (dispatch: any) => {
        await setTimeout(() => '', 1000);
        switch(type) {
            case 'guest':
                dispatch({type: ACTIONS.LOG_IN, payload: {auth: 0}});
                break;
            case 'login':
                dispatch({type: ACTIONS.LOG_IN, payload: {...userInfo, auth: 1}});
                break;
            default:
                break;
        }
    }
}

export const doLogoff = () => {
    return (dispatch: any) => {
        dispatch({type: ACTIONS.LOG_OFF});
    }
}


export const updateUser = (userInfo: { 
        name?: string;
        mail?: string;
        phone?: string;
        id?: string;
    }) => {
    return (dispatch: any) => {
        dispatch({type: ACTIONS.UPDATE_USER, payload: userInfo})
    }
}

export const selectRestaurant = (selected: number) => {
    return (dispatch: any) => {
        dispatch({type: ACTIONS.SELECT_RESTAURANT, payload: {selectedRestaurant: selected}});
    }
}