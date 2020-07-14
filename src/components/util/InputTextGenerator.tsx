import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
    width: 70%;
    background-color: #fefefe;
    border-width: 1px;
    border-color: #222;
    z-index: 0;
    border-radius: 8px;
`;

const Container = styled.View`
    margin: 8px;
`;

const LabelContainer = styled.View`
        position: absolute;
        left: 14px;
        top: 0;
        z-index: 1;
        background-color: #fefefe;
        height: 5px;
        padding: 0 4px;
`;
const StyledLabel = styled.Text`
    font-size: 15px;
    margin-top: -10px;
    /* padding: 0 4px; */
    /* text-transform: capitalize; */
`;
interface IInputTextGenerator {
    type: string;
    onChange: (e: any) => void;
    value: string;   
}

const InputTextGenerator: React.FC<IInputTextGenerator> = ({type, onChange, value}) => {
    return <Container>
            <LabelContainer>
                <StyledLabel>
                    {type}
                </StyledLabel>
            </LabelContainer>
            <StyledInput onChange={onChange} value={value} />            
        </Container>
}

export default InputTextGenerator;