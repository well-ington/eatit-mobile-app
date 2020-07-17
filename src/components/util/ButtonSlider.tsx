import React from 'react';

import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { ButtonGen } from './ButtonGen';

const Container = styled.ScrollView`

`;

interface IButtonSlider {
    type: string;
    titles: string[];
    onPress: (e: number) => void;
    active?: number;
}

const ButtonSlider: React.FC<IButtonSlider> = ({type, titles, onPress, active = -1}) => {
    return <Container horizontal>
        {
            titles && titles.map((e: string, i: number) => <ButtonGen title={e} key={e + i} onPress={() => onPress(i === active ? -1 : i)} type={active === i ? type + 'active' : type} />)
        }
    </Container>
}

const styles = StyleSheet.create({

});

export default ButtonSlider;