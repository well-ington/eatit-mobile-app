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
    padding?: string;
    margin?: string;
    active?: number;
    border?: boolean;
}

const textTypes = ['title','sub','main','small', 'subselector', 'restname'];

const TextGen: React.FC<ITextGen> = (props) => {
    const indexOfType = textTypes.indexOf(props.type);
    return <TextGenerated style={[
        [styles.title, styles.sub, styles.main, styles.small, styles.subSelector, styles.restName][indexOfType], 
        props.center && styles.centered, 
        props.strike && styles.striked,
        props.style && props.style,
        props.color ? styles[props.color] : null,
        props.padding && styles[`p${props.padding}`],
        props.margin && styles[`m${props.margin}`],
        props.active !== -1 && [styles.underActive, styles[`${props.color}Active`]][props.active],
        props.border && props.active === -1 && styles[props.color ? `${props.color}Border` : 'simpleBorder']
        ]}>
        {props.children}
    </TextGenerated>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28
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
    restName: {
        fontSize: 32
        
    },
    subSelector: {
        fontSize: 22,
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8
    },
    simpleBorder: {
        borderWidth: 2,
        borderColor: '#222'
    },
    redBorder: {
        borderWidth: 2,
        borderColor: 'crimson'
    },
    blueBorder: {
        borderWidth: 2,
        borderColor: 'skyblue'
    },
    greenBorder: {
        borderWidth: 2,
        borderColor: 'limegreen'
    },
    purpleBorder: {
        borderWidth: 2,
        borderColor: 'rebeccapurple'
    },
    psm: {
        padding: 2
    },
    pmd: {
        padding: 4
    },
    plg: {
        padding: 8
    },
    msm: {
        margin: 2
    },
    mmd: {
        margin: 4
    },
    mlg: {
        margin: 8
    },
    centered: {
        textAlign: 'center'
    },
    striked: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    underActive: {
        borderBottomColor: 'crimson',
        borderBottomWidth: 4,
        // backgroundColor: 'red'
    },
    redActive: {
        backgroundColor: 'darkred',
        color: '#ffeeee'
    },
    blueActive: {
        backgroundColor: 'skyblue',
        color: '#ffeeee'
    },
    greenActive: {
        backgroundColor: 'limegreen',
        color: '#ffeeee'
    },
    purpleActive: {
        backgroundColor: 'rebeccapurple',
        color: '#ffeeee'
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
    },
    yellow: {
        color: 'hsl(45, 80%, 50%)'
    }
});

export default TextGen;