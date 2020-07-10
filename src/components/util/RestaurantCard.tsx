import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';


interface ICard {
    place: any;
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    border-width: 1px;
    border-color: #ddd;
    margin: 8px 0;
`;

const ImagePlaceholder = styled.View`
    width: 60px;
    height: 60px;
    background-color: #444;
`;

const TextContainer = styled.View`
    padding: 16px;
`;

const ImageContainer = styled.View`
    height: 100%;
    padding: 8px;
    /* justify-content: center; */
    /* background-color: blue; */
    border-right-width: 1px;
    border-right-color: #ddd;
    flex-direction: row;
    align-items: center;

`;


const NameText = styled.Text`
    font-size: 22px;
`;

const SubText = styled.Text`
    font-size: 18px;
    color: #333;
`;


const RestaurantCard: React.FC<ICard> = ({ place }) => {
    return <Container>
        <ImageContainer>
            <ImagePlaceholder />
        </ImageContainer>
        <TextContainer>
            <View>
                <NameText>
                    {place.name}
                </NameText>
                <SubText>
                    ⭐{place.rating.toFixed(1)} {place.categories[0]}
                </SubText>
            </View>
            <SubText>
                {place.time} 🚲 {place.deliveryFee > 0 ? `$${place.deliveryFee}.00` : 'FREE'}
            </SubText>
        </TextContainer>
    </Container>
}

export default RestaurantCard;