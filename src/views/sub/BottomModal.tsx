import React from 'react';

import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';
import Svg, {Rect} from 'react-native-svg';

const dimensions = Dimensions.get('window');

const Container = styled.View`
    /* height: 20%; */
    position: absolute;
    bottom: 0;
    padding: 16px;
    padding-bottom: 32px;
    width: 100%;
    background-color: white;
    /* IOS */
    /* shadow-color: #000;
    shadow-offset: {width: 0, height: 5px};
    shadow-opacity: 1;
    shadow-radius: 7px; */
    /* ANDROID */
    /* elevation: 12; */
`;

const MainContainer = styled.View`
        position: absolute;
        z-index: 2;
`;
// const TopContainer = styled.View`
//     background-color: '#333333aa';
//     height: 60%;
// `;

// const BottomContainer = styled.View`
//     height: 40%;
// `;

const BottomModal: React.FC = (props) => {
    return <MainContainer>
    <Svg width={dimensions.width} height={dimensions.height} x='0' y='0'>
        <Rect 
        x='0'
        y='0'
        width={dimensions.width}
        height={dimensions.height}
        fill='black'
        fillOpacity={0.7}

        />
    </Svg>
    <Container>
    {
        props.children
    }

    </Container>
    </MainContainer>
}

const styles = StyleSheet.create({
    shadow: {
    //     shadowColor: "#000",
    // shadowOffset: {
    //     width: 50,
    //     height: 50,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 55,

    // elevation: 120,
    }
});

export default BottomModal;