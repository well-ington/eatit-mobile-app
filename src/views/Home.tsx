import React from 'react';
import SliderDisplay from '../components/util/SliderDisplay';
import { View, Text, SafeAreaView, TouchableHighlight, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { InputTextGen } from '../components/util/InputTextGen';
import OptionCards from '../components/util/OptionCards';
import HomeUser from './sub/HomeUser';
import HomeSearch from './sub/HomeSearch';
import HomeMain from './sub/HomeMain';
import HomeOrder from './sub/HomeOrder';

const HomeContainer = styled.ScrollView`
    /* background-color: #fff; */
`;


interface IHome {
    selectedNav: number;
    places: any;
    params: any;
}



const Home: React.FC<IHome> = ({ params, places, selectedNav }) => {
    switch (selectedNav) {
        case 1:
            return <HomeSearch categories={places.categories} />
        case 2:
            return <HomeOrder />
        case 3:
            return <HomeUser />
        default:
            return <HomeMain places={places} />
    }
}


export default Home;