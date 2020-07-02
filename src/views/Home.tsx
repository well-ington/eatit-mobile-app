import React from 'react';
import SliderDisplay from '../components/util/SliderDisplay';
import {View, Text, SafeAreaView, TouchableHighlight, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { InputTextGen } from '../components/util/InputTextGen';

const HomeContainer = styled.ScrollView`
    background-color: #fff;
    height: 90%;
`;

const TitleText = styled.Text`
    font-size: 26px;
`;

interface IHome {
    nav: number;
    places: any;
}
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

const Home: React.FC<IHome> = ({nav, places}) => {
    const [modality, setModality] = React.useState(0);
    switch (nav) {
        case 0:
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
            </>
        case 1:
            return <>
            <InputContainer>
                    <InputTextGen />
            </InputContainer>
            <HomeContainer>                
                <SliderDisplay info={places.categories} type='categories--list' />
            </HomeContainer>
            </>
        case 2:
            return <>
            <HomeContainer>                
                {/* <SliderDisplay info={places.categories} type='categories--list' /> */}
            </HomeContainer>
            </>
        case 3:
            return <>
            <HomeContainer>
                
            </HomeContainer>
            </>
        default:
            return null;
    }
}

const styles = StyleSheet.create({
    activeModality: {
        color: 'red'
    }
})

export default Home;