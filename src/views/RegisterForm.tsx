import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { InputTextGen } from '../components/util/InputTextGen';

const Container = styled.View`
    align-items: center;
`;

export const RegisterForm = () => {
    return <Container>
        <Text>
            Register form 😁😁
        </Text>
        <InputTextGen />
    </Container>
}