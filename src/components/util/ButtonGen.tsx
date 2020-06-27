import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
    text-align: center;
    border-width: 2px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: sans-serif;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
`;

interface IButtonGen {
    title: string;
    onPress: () => void;
    type: string;
}

const types = ['primary','secondary','text'];

export const ButtonGen: React.FC<IButtonGen> = ({title, onPress, type}) => {
    const colorIndex = types.indexOf(type);
    return <TouchableHighlight style={styles.container} onPress={onPress}>
        <StyledText style={[styles.primary, styles.secondary, styles.text][colorIndex] || styles.primary}>
            {title}
        </StyledText>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    primary: {
        color: 'white',
        backgroundColor: 'crimson',
        borderColor: 'crimson',       
    },
    secondary: {
        color: 'crimson',
        borderColor: 'crimson'
    },
    text: {
        color: 'dimgray',
        fontSize: 18,
        borderColor: 'transparent'
    },
    container: {
        margin: 8
    }

})