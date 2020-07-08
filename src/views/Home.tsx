import React from 'react';
import SliderDisplay from '../components/util/SliderDisplay';
import { View, Text, SafeAreaView, TouchableHighlight, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import OptionCards from '../components/util/OptionCards';
import HomeUser from './sub/HomeUser';
import HomeSearch from './sub/HomeSearch';
import HomeMainHoc from './sub/HomeMainHoc';
import HomeOrder from './sub/HomeOrder';
import HomeRestaurant from './sub/HomeRestaurant';
import { Scene, Stack, Router} from 'react-native-router-flux';

const HomeContainer = styled.ScrollView`
    /* background-color: #fff; */
`;


interface IHome {
    selectedNav: number;
    places: any;
    params?: {restID?: number;};
    userInfo: any;
}



const Home: React.FC<IHome> = ({ params, userInfo, places, selectedNav }) => {

    switch (selectedNav) {
        case 1:
            return <HomeSearch categories={places.categories} />
        case 2:
            return <HomeOrder />
        case 3:
            return <HomeUser userInfo={userInfo} />
        default:
            return <Router>
                <Stack hideNavBar>
                    <Scene initial key='main' component={(params: any) => <HomeMainHoc params={params} />} />
                </Stack>
            </Router>
    }
}


export default Home;