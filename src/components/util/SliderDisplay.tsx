import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { places } from 'src/store/reducer/places';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
    /* height: 200px; */
`;

const TitleContainer = styled.View`

`;
const TitleText = styled.Text`
    font-size: 36px;
    /* font-family: Arial; */
    font-weight: 300;
    padding: 8px 16px;
`;

const CategoriesView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

const RestView = styled.View`
    /* height: 200px; */
`;

const CategoryContainer = styled.View`
    height: 125px;
    width: 200px;
    background-color: green;
    border-width: 4px;
    border-color: limegreen;
`;

// const RestaurantContainer = styled.View``;

const CategoryText = styled.Text`
    color: white;
    font-size: 26px;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 16px;
`;

interface ISliderDisplay {
    type: string;
    info: string[] | any[];
    vertical?: boolean;
}



const SliderDisplay: React.FC<ISliderDisplay> = ({type, info, vertical = false}) => {
    switch(type){
        case 'categories':
            const categories = [...info];
            return <Container horizontal={!vertical}>
                {
                    categories.map((name: string) => <CategoryContainer key={name}>
                        <CategoryText>{name}</CategoryText>
                    </CategoryContainer>)
                }
            </Container>
        case 'restaurants--list':
            const restaurants = [...info];
            return <Container>
            <RestView style={styles.restaurantsContainer} >
                {
                    restaurants.map((place: {name: string}, index: number) => <CategoryContainer style={styles.restaurantItem} key={place.name + index}>
                        <CategoryText>{place.name}</CategoryText>
                    </CategoryContainer>)
                }
            </RestView>
            </Container>

        case 'categories--list':
            const categlist = [...info];
            return <>
            <TitleContainer>
                <TitleText>Categories</TitleText>
            </TitleContainer>
            <CategoriesView style={styles.categorySearch}>
                {
                    categlist.map((name: string) => <CategoryContainer key={name}>
                        <CategoryText>{name}</CategoryText>
                    </CategoryContainer>)
                }
            </CategoriesView>
            </>
        default:
            return null;
    }
}

const styles = StyleSheet.create({
    restaurantsContainer: {
        width: '100%'
    },
    restaurantItem: {
        width: '100%',
        backgroundColor: 'blue'
    },
    categorySearch: {
        // width: '100%',
        // backgroundColor: 'blue',
        flexWrap: 'wrap',
        // flexDirection: 'row'
    }
});

export default SliderDisplay;