import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import { ButtonGen } from '../../components/util/ButtonGen';
import { connect } from 'react-redux';
import { doLogin } from 'src/store/actions/main';
import { Actions } from 'react-native-router-flux';

const Container = styled.View``;

interface ILoginDrawer {
    // setLoginType: (type: string) => void;
}

const LoginDrawer: React.FC = () => {
    return <Container>
                    <Text>How do you wanna login?</Text>
                    <ButtonGen type='secondary' title='email' onPress={() => Actions.login({ID: 'email'})} />
                    <ButtonGen type='secondary' title='phone' onPress={() => Actions.login({ID: 'phone'})} />
    </Container>
}


export default LoginDrawer;
