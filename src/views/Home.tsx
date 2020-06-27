import React from 'react';

import {View, Text, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const HomeContainer = styled.View`
    background-color: #fff;
`;

const Home = () => {
    return <HomeContainer>
        <Text>I'm a home component</Text>
    </HomeContainer>
} 

export default Home;