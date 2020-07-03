import React from 'react';
import styled from 'styled-components/native';
import { Text, Image, TouchableHighlight } from 'react-native';
import { ButtonGen } from '../components/util/ButtonGen';
import { InputTextGen } from '../components/util/InputTextGen';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { doLogin } from '../store/actions/main';

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

interface ILoginForm {
    login: (type: string, userInfo?: any) => void;
}


const LoginForm: React.FC<ILoginForm> = ({login}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginType, setLoginType] = React.useState('');
    

    const selectedForm = loginType === 'email' ? <>
    <MediumImage source={{uri: 'https://picsum.photos/150'}} />
    <Text>email</Text>
    <InputTextGen autoFocus onChange={(text: any) => setEmail(email + text)} />
    
    <Text>password</Text>
    <InputTextGen onChange={(text: any) => setPassword(password + text)} />


    <ButtonGen title='Enter' onPress={() => {
        login('guest');
        // Actions.home({id: 0});
        }} type='primary' />
    <ButtonGen title='Forgot my password' onPress={() => console.log('ahoy')} type='text' />
    </>
    : loginType === 'phone' ? <>
    <MediumImage source={{uri: 'https://picsum.photos/150'}} />
    <Text>your phone</Text>
    <InputTextGen autoFocus onChange={(text: any) => setEmail(email + text)} />
    </> : <>
                    <Text>How do you wanna login?</Text>
                    <ButtonGen type='secondary' title='email' onPress={() => setLoginType('email')} />
                    <ButtonGen type='secondary' title='phone' onPress={() => setLoginType('phone')} />
    </>;

    return <Container>        
    <FormContainer>
    {selectedForm}
    </FormContainer>

</Container>
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (type: string, userInfo?: any) => dispatch(doLogin(type))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);