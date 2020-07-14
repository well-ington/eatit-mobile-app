import React from 'react';

import styled from 'styled-components/native';
import { ButtonGen } from '../../components/util/ButtonGen';
import RestaurantCard from '../../components/util/RestaurantCard';
import TextGen from '../../components/util/TextGen';

const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px;

`;

const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

const TextContainer = styled.View`
    padding: 8px;
    width: 100%;
`;

const SampleContainer = styled.View`
    width: 80%;
    margin-left: 10%;
`;

interface IPermissionSubview {
    type: string;
    onPressHandler: () => void;
}

const PermissionSubview: React.FC<IPermissionSubview> = ({type, onPressHandler}) => {
    const dummyPlace = {
        name: 'Burger Point',
        rating: 4.4,
        categories: ['Fast Food'],
        time: '25-45 min',
        deliveryFee: 0
    }
    return <Container>
    <TextContainer>
        <TextGen type='title' center>Welcome</TextGen>
        <TextGen type='main' center>Your delivery only a few touches away</TextGen>
    </TextContainer>
    <SampleContainer>
        {
            type === 'geolocation' && <RestaurantCard place={dummyPlace} />
        }
    </SampleContainer>
    <TextContainer>
        <TextGen type='title' center bold>{type === 'geolocation' ? 'Enable Geolocation' : 'Enable notifications'}</TextGen>
        <TextGen type='main' center>{type === 'geolocation' ? 'Enable this functionality to search for places close to you.' : 'Get push up informations about your current order and for discounts coupouns.'}</TextGen>
    </TextContainer>

    

    <ButtonContainer>
        {
            ['Skip', 'Enable'].map((e: string, i: number) => <ButtonGen key={e + i} title={e} sizing={1} onPress={onPressHandler} type={['secondary', 'primary'][i]} />,)
        }
    </ButtonContainer>
    </Container>;
}

export default PermissionSubview;