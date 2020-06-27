import React from 'react';

import styled from 'styled-components/native';
import { View } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { ButtonGen } from '../components/util/ButtonGen';

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

export const Login = () => {
    return <LoginContainer>


        <ButtonContainer>
            <ButtonGen title={'Login'} onPress={() => console.log('bang')} type='primary' />
            <ButtonGen title={'Register'} onPress={() => console.log('bang')} type='secondary' />
            <ButtonGen title={'Register'} onPress={() => console.log('bang')} type='text' />
        </ButtonContainer>
    </LoginContainer>
}