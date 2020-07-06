import React from 'react';

import styled from 'styled-components/native';
import { StyleSheet, TouchableHighlight, View, Text, FlatList } from 'react-native';
import SliderDisplay from '../../components/util/SliderDisplay';
import TextGen from '../../components/util/TextGen';
import RestaurantCard from '../../components/util/RestaurantCard';
import { Actions } from 'react-native-router-flux';

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

const FilterContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

interface IHomeMain {
    places: any;
}


const HomeMain: React.FC<IHomeMain> = ({places}) => {
    const [modality, setModality] = React.useState(0);
    const [filterType, setFilter] = React.useState('rating');
    const filtered = [...places.places];
    switch(filterType) {
        case 'rating':
            filtered.sort((a: any, b: any) => a.rating < b.rating ? 1 : -1);
            break;
        case 'deliveryFee':
            filtered.sort((a: any, b: any) => a.deliveryFee < b.deliveryFee ? -1 : 1)
            break;
        default:
            break;
    }
    return <FlatList data={[
    <ModalityContainer>
    {
        ['delivery', 'pick up'].map((name: string, index: number) => <TouchableHighlight onPress={() => modality !== index && setModality(index)} key={name}>
            <ModalityText style={index === modality && styles.activeModality}>{name}</ModalityText>
        </TouchableHighlight>)
    }
    </ModalityContainer>,
    <View>
        <SliderDisplay type='categories' info={places.categories} />
    </View>,
    <FilterContainer>
    {
    ['nota','frete'].map((e: string, i: number) => 
    <TouchableHighlight key={e + 'filter'} onPress={ () => setFilter(['rating', 'deliveryFee'][i])}  >
        <TextGen type='main'>{e}</TextGen>
    </TouchableHighlight>)
    }
    </FilterContainer>,
    <FlatList data={filtered} keyExtractor={(item, index) => index + 'virtualizedList'} renderItem={({item, index}) => <TouchableHighlight onPress={() => Actions.home({restID: item.id})}><RestaurantCard place={item} /></TouchableHighlight> } />
]} keyExtractor={(item, index) => index + 'parentFlatList'} renderItem={({item, index}) => <>{item}</>} />;
}


const styles = StyleSheet.create({
    activeModality: {
        color: 'red'
    }
})

export default HomeMain;