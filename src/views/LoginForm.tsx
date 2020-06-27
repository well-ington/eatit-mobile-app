import React from 'react';
import styled from 'styled-components/native';
import { Text, Image, TouchableHighlight } from 'react-native';
import { ButtonGen } from '../components/util/ButtonGen';
import { InputTextGen } from '../components/util/InputTextGen';
// import { Actions } from 'react-native-router-flux';

const Container = styled.View`
    height: 100%;
`;

const FormContainer = styled.View`
    flex: 1;
    display: flex;
    position: absolute;
    top: 15%;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

const MediumImage = styled.ImageBackground`
    height: 150px;
    width: 150px;
`;

export const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return <Container>        
        <FormContainer>
            <MediumImage source={{uri: 'https://picsum.photos/150'}} />
            <Text>email</Text>
            <InputTextGen autoFocus onChange={(text: any) => setEmail(email + text)} />
            
            <Text>password</Text>
            <InputTextGen onChange={(text: any) => setPassword(password + text)} />


            <ButtonGen title='Enter' onPress={() => console.log('ahoy')} type='primary' />
            <ButtonGen title='Forgot my password' onPress={() => console.log('ahoy')} type='text' />
        </FormContainer>

    </Container>
}