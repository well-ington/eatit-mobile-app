import React from 'react';
import PermissionSubview from './sub/PermissionSubview';
import { Actions } from 'react-native-router-flux';



const Notifications: React.FC = () => {
    const onPressHandler = () => {
        Actions.loginPrompt();
    }
    return <PermissionSubview type='notification' onPressHandler={onPressHandler}/>
}

export default Notifications;