import React from 'react';

import styled from 'styled-components/native';
import { StyleSheet, TouchableHighlight, View, Text, FlatList, Dimensions } from 'react-native';
import HomeRestaurant from './HomeRestaurant';
import { Stack, Scene, Router, Actions, Drawer } from 'react-native-router-flux';
import HomeMain from './HomeMain';
import { connect } from 'react-redux';
import { Tstore } from 'src/store/reducer/main';

interface IHomeMainHOC {
    places: any;
    params?: any;
}

const dim = Dimensions.get('window').width;

const HomeMainHOC: React.FC<IHomeMainHOC> = ({places, params, selected}) => {
    const a = 0;

    return <Router>
        <Stack hideNavBar>
    <Drawer drawerWidth={dim} drawerPosition='right' contentComponent={() => {
        return <HomeRestaurant/>}}
        drawerOpenRoute = 'DrawerOpen'
	    drawerCloseRoute = 'DrawerClose'
	    drawerToggleRoute = 'DrawerToggle'        
        >
            <Stack hideNavBar>
                <Scene key='submain' component={() => <HomeMain places={places} />} />
            </Stack>
        </Drawer>
        </Stack>
    </Router>
}


const mapStateToProps = (state: Tstore) => {
    const t = state;
    return {
        places: t.places
    }
}


export default connect(mapStateToProps)(HomeMainHOC);