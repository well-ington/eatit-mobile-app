import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import RestaurantCard from './RestaurantCard';
import CategoryCard from './CategoryCard';
import CardGen from './CardGen';

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
    padding: 16px;
`;

const CategoryContainer = styled.View`
    height: 125px;
    width: 200px;
    /* background-color: green; */
    border-width: 4px;
    border-color: limegreen;
`;

// const RestaurantContainer = styled.View``;

const CategoryText = styled.Text`
    /* color: white; */
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



const SliderDisplay: React.FC<ISliderDisplay> = ({ type, info, vertical = false }) => {
    switch (type) {
        case 'categories':
            const categories = [...info];
            return <Container horizontal={!vertical}>
                {
                    categories.map((name: string, index: number) => <CategoryCard key={index + name} category={name} />)
                }
            </Container>
        case 'restaurants--list':
            const restaurants = [...info];
            return <Container>
                <RestView style={styles.restaurantsContainer} >
                    {
                        restaurants.map((place: any, index: number) => <RestaurantCard key={place.name + index} place={place} />)
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
                        categlist.map((name: string, index: number) => <CategoryCard category={name} key={name + index} />)
                    }
                </CategoriesView>
            </>
        case 'promo':
            const promos = [...info];
            return <Container horizontal={!vertical}>
                {
                    promos.map((name: string, index: number) => <CardGen type='promo' key={index + name} name={name} />)
                }
            </Container>
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
    },
    categorySearch: {
        flexWrap: 'wrap',
    }
});

export default SliderDisplay;