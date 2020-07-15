import React from 'react';
import styled from 'styled-components/native';
import InputTextGen from '../../components/util/InputTextGen';
import InputTextGenerator from '../../components/util/InputTextGenerator';
import TextGen from '../../components/util/TextGen';
import { ButtonGen } from '../../components/util/ButtonGen';
import { Actions } from 'react-native-router-flux';

const Container = styled.View`
    /* padding: 32px 0 16px 16px; */    
    /* padding-left: 16px; */
    height: 100%;
`;

const HeaderContainer = styled.View`
    margin: 15% 16px;
`;

const InputContainer = styled.View`
    margin-top: 12px;
`;

const ButtonContainer = styled.View`
    position: absolute;
    bottom: 0%;
    width: 100%;
`;

interface ILoginForm {
    type: string;
}


const LoginForm: React.FC<ILoginForm> = ({type}) => {
    const [inputValue, setInputValue] = React.useState('');
    let colored = 'gray';
    if (type === 'phone' && inputValue.length > 11 ) {
        colored = 'none';
    } else {
        const toMatch = inputValue.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        colored = toMatch !== null ? 'none' : 'gray';
    }

    const inputHandler = (event: any) => {
        let newValue;
        if (type === 'phone') {
            newValue = inputValue + event.nativeEvent.text;
            newValue.replace(/[^0-9\s]/g, '');
            if (newValue !== inputValue) setInputValue(newValue);
        } else {
            newValue = inputValue + event.nativeEvent.text;
            newValue.replace(/\s/g, '');
        }
        setInputValue(event.nativeEvent.text);
    }

    return <Container>
        <HeaderContainer>
            <TextGen type='main'>Please type your { type === 'phone' ? 'Phone number' : 'E-mail' }</TextGen>
            <InputContainer>        
            <InputTextGenerator label type={type === 'phone' ? 'Phone number' : 'E-mail'} onChange={(event: any) => setInputValue(event.nativeEvent.text)} value={inputValue} />
            </InputContainer>
        </HeaderContainer>
        <ButtonContainer>
            {
                [...(type !== 'phone' ? ['Confirm'] : ['Whatsapp', 'SMS'])].map((e: string, i: number) => <ButtonGen key={'login' + e} title={e} onPress={() => Actions.verifyCode({ID: type})} nopadding={type !== 'phone'} sizing={2} color={colored} type={['primary', 'secondary'][i]}  />)
            }
        </ButtonContainer>
    </Container>
}

export default LoginForm;