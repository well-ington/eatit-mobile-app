import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
    text-align: center;
    border-width: 2px;
    /* text-transform: uppercase; */
    /* font-size */
    font-weight: 700;
    font-family: sans-serif;
    letter-spacing: 2px;
    font-size: 22px;
    padding: 16px;
    /* margin: 8px; */
    border-radius: 5px;
`;

interface IButtonGen {
    title: string;
    onPress: () => void;
    type: string;
    sizing?: number;
    color?: string;
    nopadding?: boolean;
}

const types = ['primary','secondary','text'];

export const defaultColors = {
    gray: 'dimgray',
    lightgray: 'silver',
    blue: 'steelblue',
    lightblue: 'royalblue',
    red: 'crimson'
}

export const ButtonGen: React.FC<IButtonGen> = ({title, onPress, type, sizing, color = 'none', nopadding}) => {
    const colorIndex = types.indexOf(type);
    return <TouchableHighlight style={[
        !nopadding && styles.container,
        sizing !== undefined && [styles.smaller, styles.medium, styles.bigger][sizing]
        
        ]} onPress={onPress}>
        <StyledText style={[
            ([styles.primary, styles.secondary, styles.text][colorIndex] || styles.primary),
            color !== 'none' && styles[`${type}${color}`]
        ]}>
            {title}
        </StyledText>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    primary: {
        color: 'white',
        backgroundColor: defaultColors.red,
        borderColor: defaultColors.red      
    },
    primarygray: {
        color: defaultColors.gray,
        borderColor: defaultColors.lightgray, 
        backgroundColor: defaultColors.lightgray
    },
    primaryblue: {
        backgroundColor: defaultColors.blue,
        borderColor: defaultColors.blue,  
    },
    secondary: {
        color: defaultColors.red,
        borderColor: defaultColors.red
    },
    secondarygray: {
        color: defaultColors.gray,
        borderColor: defaultColors.lightgray,  
    },
    secondaryblue: {
        color: defaultColors.blue,
        borderColor: defaultColors.blue,  
    },
    text: {
        color: defaultColors.red,
        fontSize: 18,
        borderColor: 'transparent'
    },
    textgray: {
        color: defaultColors.gray,
    },
    textblue: {
        color: defaultColors.blue,
    },
    container: {
        padding: 8
        // margin: '8'
        // padding: 16
        // width: 'auto'
    },
    smaller: {
        width: '40%'
    },
    medium: {
        width: '50%'
    },
    bigger: {
        width: '100%'
    }


})