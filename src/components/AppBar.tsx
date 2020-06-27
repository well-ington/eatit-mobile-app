import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const AppView = styled.View`

`;

const AppBar = () => {
    return <AppView>
        <Text>I'm an appbar</Text>
        <View style={{backgroundColor: 'black'}}></View>
        {/* <Image source={''}></Image> */}
    </AppView>
}

// const styles = StyleSheet.create({

// });

export default AppBar;