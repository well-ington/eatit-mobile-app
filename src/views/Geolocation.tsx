import React from 'react';
import styled from 'styled-components/native';
import PermissionSubview from './sub/PermissionSubview';
import { Actions } from 'react-native-router-flux';


const Container = styled.View`

`;

const Geolocation: React.FC = () => {
    const onPressHandler = () => {
        Actions.enableNot();
    }
    return <PermissionSubview type='geolocation' onPressHandler={onPressHandler}/>
}

export default Geolocation;