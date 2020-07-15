import React from 'react';

import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import TextGen from '../../components/util/TextGen';

const Container = styled.View`
    /* margin: 16px; */
    padding: 12px;
    width: 80%;
    left: 10%;
    position: absolute;
    z-index: 5;
    flex-direction: row;
    align-items: center;
    
`;

const TextContainer = styled.View`
    padding-left: 16px;
`;


interface IAlertModal {
    type: string;
}

const types = ['success', 'error'];

const AlertModal: React.FC<IAlertModal> = (props) => {
    const keys = types.indexOf(props.type);
    const styleReference = [
        keys > -1 ? [styles.success, styles.error][keys] : styles.success
    ];
    return <Container style={styleReference}>
        <Icon size={22} color={['green', 'darkred'][keys]} name={['checkcircleo', 'exclamationcircleo'][keys]} />
        <TextContainer>
            <TextGen type='main' color='white'>
            {props.children}
            </TextGen>
        </TextContainer>
    </Container>
}

const styles = StyleSheet.create({
    error: {
        backgroundColor: 'crimson',
        color: 'white',
    },
    success: {
        backgroundColor: 'limegreen',
        color: 'white',
        
    }
});

export default AlertModal;