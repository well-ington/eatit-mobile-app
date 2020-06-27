import React from 'react';

import styled from 'styled-components/native';
// import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { ButtonGen } from '../components/util/ButtonGen';
// import { LoginForm } from './LoginForm';

const LoginContainer = styled.View`
    height: 100%;
`;

const StyledButton = styled.Button`

`;

const ButtonContainer = styled.View`
    position: absolute;
    bottom: 10%;
    width: 100%;
`;

export const LoginPrompt = () => {
    return <LoginContainer>
        <ButtonContainer>
            <ButtonGen title={'Login'} onPress={() => Actions.login()} type='primary' />
            <ButtonGen title={'Register'} onPress={() => Actions.register()} type='secondary' />
            <ButtonGen title={'Enter as a guest'} onPress={() => Actions.guest()} type='text' />
        </ButtonContainer>
    </LoginContainer>
}