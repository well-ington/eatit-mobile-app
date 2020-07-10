import React from 'react';

import styled from 'styled-components/native';
import { StyleSheet, TouchableHighlight, View, Text, FlatList } from 'react-native';
import SliderDisplay from '../../components/util/SliderDisplay';
import TextGen from '../../components/util/TextGen';
import RestaurantCard from '../../components/util/RestaurantCard';
import { Actions } from 'react-native-router-flux';
import { selectRestaurant } from '../../store/actions/main';
import {connect} from 'react-redux';
import { Tstore } from 'src/store/reducer/main';

const HomeContainer = styled.ScrollView`
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
    select: (e: number) => void;
}


const HomeMain: React.FC<IHomeMain> = ({places, select}) => {
    const [modality, setModality] = React.useState(0);
    const [filterType, setFilter] = React.useState(0);
    const filtered = [...places.places];
    switch(filterType) {
        case 0:
            filtered.sort((a: any, b: any) => a.rating < b.rating ? 1 : -1);
            break;
        case 1:
            filtered.sort((a: any, b: any) => a.deliveryFee < b.deliveryFee ? -1 : 1)
            break;
        default:
            break;
    }
    return <FlatList data={[
    <ModalityContainer>
    {
        ['Delivery', 'Pick up'].map((name: string, index: number) => <TouchableHighlight onPress={() => modality !== index && setModality(index)} key={name}>
    <TextGen type='subselector' padding='md' margin='sm' active={index === modality ? 0 : -1}>{name}</TextGen>
        </TouchableHighlight>)
    }
    </ModalityContainer>,
    <View>
        <SliderDisplay type='categories' info={places.categories} />
    </View>,
    <FilterContainer>
    {
    ['Rating','Delivery Fee'].map((e: string, i: number) => 
    <TouchableHighlight key={e + 'filter'} onPress={ () => setFilter(i)}  >
        <TextGen active={filterType === i ? 0 : -1} type='subselector'>{e}</TextGen>
    </TouchableHighlight>)
    }
    </FilterContainer>,
    <FlatList data={filtered} keyExtractor={(item, index) => index + 'virtualizedList'} renderItem={({item, index}) => <TouchableHighlight onPress={() => {
        Actions.drawerOpen();
        select(item.id);
        }}>
        <RestaurantCard place={item} />
        </TouchableHighlight> } />
]} keyExtractor={(item, index) => index + 'parentFlatList'} renderItem={({item, index}) => <>{item}</>} />;
}


const styles = StyleSheet.create({
    activeModality: {
        color: 'red'
    }
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        select: (id: number) => dispatch(selectRestaurant(id))
    }
}

const mapStateToProps = (state: Tstore) => {
    const t = state;
    return {
        places: t.places
    }
}

// export default HomeMain;
export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);