import React from 'react';

import styled from 'styled-components/native';
import OptionCards from '../../components/util/OptionCards';

const UserContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 16px;
    background-color: #eee;
`;

const HomeContainer = styled.ScrollView`
    background-color: #fff;
    /* height: 90%; */
`;

const UserImage = styled.View`
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50px;
`;

const UserTextContainer = styled.View`
    margin-left: 32px;
`;

const UserText = styled.Text`
    font-size: 32px;
`;

const UserSubText = styled.Text`
    font-size: 16px;
`;


const HomeUser: React.FC = () => {

    const [sections] = React.useState(() => {
        const firstComments: string[] = [...'My notifications hub,Wallet balance,My promo codes,Favorite places,My payment methods,My addresses,My donations'.split(',')]
        const firstIcons: string[] = [...'bell,wallet,emotsmile,star,credit-card,location-pin,heart'.split(',')];
        const firstOptionsArray: { name: string, icon: string, description: string }[] = [...'notifications,wallet,coupons,favorites,payment,addresses,donation'.split(',')].map((e: string, i: number) => {
            return {
                name: e,
                icon: firstIcons[i],
                description: firstComments[i]
            }
        });
        const secondIcons: string[] = [...'info,settings,lock,pin,people'.split(',')]
        const secondOptionsArray: { name: string, icon: string }[] = [...'help,settings,security,suggest a place,become a partner'.split(',')]
            .map((e: string, i: number) => { return { name: e, icon: secondIcons[i] } });
        return { firstOptionsArray, secondOptionsArray }
    });
    return <>
        <UserContainer>
            <UserImage />
            <UserTextContainer>
                <UserText>User Name</UserText>
                <UserSubText>Edit profile</UserSubText>
            </UserTextContainer>
        </UserContainer>
        <HomeContainer>
            <OptionCards info={sections.firstOptionsArray} type='primary' />
            <OptionCards info={sections.secondOptionsArray} type='secondary' />
        </HomeContainer>
    </>
}

export default HomeUser;