import React from 'react';
import SliderDisplay from '../components/util/SliderDisplay';
import { View, Text, SafeAreaView, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import OptionCards from '../components/util/OptionCards';
import HomeUser from './sub/HomeUser';
import HomeSearch from './sub/HomeSearch';
import HomeMainHoc from './sub/HomeMainHoc';
import HomeOrder from './sub/HomeOrder';
import HomeRestaurant from './sub/HomeRestaurant';
import { Scene, Stack, Router} from 'react-native-router-flux';
import HomeMain from './sub/HomeMain';


interface IHome {
    selectedNav: number;
    places: any;
    params?: {restID?: number;};
    userInfo: any;
}


const dim = Dimensions.get('window').width;

const Home: React.FC<IHome> = ({ userInfo, places, selectedNav }) => {

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
                    <Scene drawer drawerPosition='right' drawerWidth={dim} contentComponent={() => <HomeRestaurant />} >
                        <Stack hideNavBar>
                            <Scene initial key='main' component={() => <HomeMain />} />
                        </Stack>
                    </Scene>
                </Stack>
            </Router>
    }
}


export default Home;