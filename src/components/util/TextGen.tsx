import React from 'react';

import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const TextGenerated = styled.Text`
    font-size: 22px;
`;

interface ITextGen {
    type: string;
    center?: boolean;
    strike?: boolean;
    color?: string;
    style?: any;
}

const textTypes = ['title','sub','main','small'];

const TextGen: React.FC<ITextGen> = (props) => {
    const indexOfType = textTypes.indexOf(props.type);
    return <TextGenerated style={[
        [styles.title, styles.sub, styles.main, styles.small][indexOfType], 
        props.center && styles.centered, 
        props.strike && styles.striked,
        props.style && props.style,
        props.color && styles[props.color]
        ]}>
        {props.children}
    </TextGenerated>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22
    },
    sub: {
        fontSize: 18,
        color: '#999'
    },
    main: {
        fontSize: 20
    },
    small: {
        fontSize: 16
    },
    centered: {
        textAlign: 'center'
    },
    striked: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    red: {
        color: 'crimson'
    },
    blue: {
        color: 'skyblue'
    },
    green: {
        color: 'limegreen'
    },
    purple: {
        color: 'rebeccapurple'
    }
});

export default TextGen;