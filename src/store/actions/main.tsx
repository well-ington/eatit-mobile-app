const LOG_IN: string = 'LOG-IN';
const LOG_OFF: string = 'LOG-OFF';
const UPDATE_USER: string = 'UPDATE-USER'

export const ACTIONS = {
    LOG_IN, LOG_OFF, UPDATE_USER
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


export type TACTIONS = TLOG_IN | TLOG_OFF | TUPDATE_USER; 

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