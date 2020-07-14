import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
    height: 100%;
    background-color: limegreen;
`;

const TextContainer = styled.View`

`;

const ButtonContainer = styled.View`
    position: absolute;
    bottom: 0%;
    width: 100%;
`;

interface IVerificationCode {
    type: string;
}

const VerificationCode: React.FC<IVerificationCode> = ({type}) => {
    return <Container>

        <TextContainer>

        </TextContainer>
        <ButtonContainer>

        </ButtonContainer>
    </Container>
}

export default VerificationCode;