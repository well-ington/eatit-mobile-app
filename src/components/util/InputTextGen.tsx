import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
        background-color: #ededed;
        width: 80%;
        border-radius: 5px;
`;

export const InputTextGen = (props: any) => {
    return <StyledInput {...props}/>
}