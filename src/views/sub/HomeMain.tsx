import React from 'react';

import styled from 'styled-components/native';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import SliderDisplay from '../../components/util/SliderDisplay';

const HomeContainer = styled.ScrollView`
    /* background-color: #fff; */
`;



const ModalityText = styled.Text`
    font-size: 22px;
    text-transform: capitalize;
    margin-right: 12px;
`;

const ModalityContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 5px;
`;

const InputContainer = styled.View`
    height: 60px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #888;
    box-shadow: 2px 2px 4px black;
`;

interface IHomeMain {
    places: any;
}


const HomeMain: React.FC<IHomeMain> = ({places}) => {
    const [modality, setModality] = React.useState(0);   
    return <>
    <HomeContainer>
        <ModalityContainer>
    {
        ['delivery', 'pick up'].map((name: string, index: number) => <TouchableHighlight onPress={() => modality !== index && setModality(index)} key={name}>
            <ModalityText style={index === modality && styles.activeModality}>{name}</ModalityText>
        </TouchableHighlight>)
    }
    </ModalityContainer>
    <View>
    <SliderDisplay type='categories' info={places.categories} />
    </View>
    <SliderDisplay type='restaurants--list' info={places.places} vertical />
    </HomeContainer>
</>;
}


const styles = StyleSheet.create({
    activeModality: {
        color: 'red'
    }
})

export default HomeMain;