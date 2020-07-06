import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import TextGen from './TextGen';

const StyledInput = styled.TextInput`
        background-color: #ededed;
        width: 80%;
        border-radius: 5px;
`;

interface IInputTextGen {
    type: string;
    onChange: (event: any) => void;
    value: string;
    label?: string;
    secureTextEntry?: boolean;
    autoFocus?: boolean;
}

const InputContainer = styled.View`
    width: 100%;
    align-items: center;
`;

const inputTypes = ['main', 'sub'];

const InputTextGen: React.FC<IInputTextGen> = ({type, label, autoFocus = false, secureTextEntry = false, onChange, value}) => {
    const typeIndex = inputTypes.indexOf(type);
    return <InputContainer>
    <TextGen type='main'>{label}</TextGen>
    <StyledInput autoFocus={autoFocus} secureTextEntry={secureTextEntry} onChange={onChange} value={value} style={[styles.main, styles.sub][typeIndex]}/>
    </InputContainer>
}

const styles = StyleSheet.create({
    main: {

    },
    sub: {
        backgroundColor: '#ededed',
        borderRadius: 5
    }

});

export default InputTextGen;