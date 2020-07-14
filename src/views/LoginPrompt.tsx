import React from 'react';

import styled from 'styled-components/native';
// import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { ButtonGen } from '../components/util/ButtonGen';
// import { LoginForm } from './LoginForm';

const LoginContainer = styled.View`
    height: 100%;
`;

const ButtonContainer = styled.View`
    position: absolute;
    bottom: 0%;
    padding: 8px;
`;
const SubContainer = styled.View`
    flex-direction: row;
    /* justify-content: space-; */
`;

export const LoginPrompt = () => {
    return <LoginContainer>
        <ButtonContainer>
            <ButtonGen sizing={2} title={'Login with Facebook'} color='blue' onPress={() => Actions.drawerOpen()} type='primary' />
            <SubContainer>
                <ButtonGen title={'Phone'} sizing={1} color='gray' onPress={() => Actions.phoneLogin()} type='secondary' />
                <ButtonGen title={'E-mail'} sizing={1} color='gray' onPress={() => Actions.mailLogin()} type='secondary' />
            </SubContainer>
            <ButtonGen sizing={2} title={'Or continue as a guest'} color='gray' onPress={() => null} type='text' />
        </ButtonContainer>
    </LoginContainer>
}