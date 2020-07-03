import React from 'react';

import styled from 'styled-components/native';
import { View, TouchableHighlight } from 'react-native';
import OrderCard from '../../components/util/OrderCard';

interface IHomeOrder {

}

const Container = styled.ScrollView`
    background-color: #efdddd;
`;

const HeaderContainer = styled.View`
    padding-top: 8px;
`;

const TitleText = styled.Text`
    font-size: 22px;
    text-align: center;
`;

const SubTitleText = styled.Text`
    font-size: 18px;
`;

const SubContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0 8px;
    margin-top: 8px;
`;

const HomeOrder: React.FC<IHomeOrder> = () => {

    return <>
        <HeaderContainer>
            <TitleText>
                Pedidos
            </TitleText>
            <SubContainer>
                <TouchableHighlight>
                    <SubTitleText>
                        Histórico
                </SubTitleText>
                </TouchableHighlight>
                <TouchableHighlight>
                    <SubTitleText>
                        Em andamento
                    </SubTitleText>
                </TouchableHighlight>
            </SubContainer>
        </HeaderContainer>
        <Container>
            <OrderCard />
        </Container>
    </>
}

export default HomeOrder;