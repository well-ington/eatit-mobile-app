import React from 'react';

import {View, Text, SafeAreaView, TouchableHighlight, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const HomeContainer = styled.View`
    background-color: #fff;
    height: 90%;
`;

const TitleText = styled.Text`
    font-size: 26px;
`;

interface IHome {
    nav: number;
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

const Home: React.FC<IHome> = ({nav}) => {
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
       
    </HomeContainer>
    </>
}

const styles = StyleSheet.create({
    activeModality: {
        color: 'red'
    }
})

export default Home;