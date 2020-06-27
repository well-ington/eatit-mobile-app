import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { InputTextGen } from '../components/util/InputTextGen';

const Container = styled.View`
`;

const InputContainer = styled.View`
    align-items: center;
`;


export const GuestForm = () => {
    return <Container>
        <InputContainer>
            <Text>Input your zipcode!</Text>            
            <InputTextGen />
        </InputContainer>
    </Container>
}