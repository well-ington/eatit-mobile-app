import React from 'react';

import styled from 'styled-components/native';
import TextGen from './TextGen';
import { StyleSheet } from 'react-native';


const Container = styled.View`

`;

const ImagePlaceholder = styled.View`

`;

interface ICardGen {
    type: string;
    name: string;
}

const CardGen: React.FC<ICardGen> = ({type, name}) => {
    return <Container style={[type === 'promo' && styles.promo]}>
        <ImagePlaceholder style={[type === 'promo' && styles.promoImg]} />
        <TextGen style={[type === 'promo' && styles.promoText]} type='main'>
            {name}
        </TextGen>
    </Container>
}

const styles = StyleSheet.create({
    promo: {        
        position: 'relative',
        margin: 16
    },
    promoImg: {
        height: 175,
        width: 350,
        backgroundColor: 'silver',
        borderRadius: 10
    },
    promoText: {
        position: 'absolute',
        top: '45%',
        left: '15%'
    }
});

export default CardGen;