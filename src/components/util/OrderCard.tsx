import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { ButtonGen } from './ButtonGen';
import ItemList from './ItemList';

const Container = styled.View`
    /* align-items: center; */
    background-color: white;
    margin: 22px;
    padding: 8px;
    position: relative;
`;

const MainText = styled.Text`
    font-size: 20px;
`;

const SubText = styled.Text`
    color: #999;
    /* text-align: center; */
    font-size: 18px;
`;

const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 4px 16px 16px 16px;
    /* width: 100%; */

`;

const HeaderTextContainer = styled.View`
    padding-left: 16px;
    /* width: 100%; */
`;

const ItemsContainer = styled.View`
    border-top-width: 1px;
    border-top-color: #ddd;
    padding: 14px;
    flex-direction: row;
`;


const ImagePlaceholder = styled.View`
    width: 40px;
    height: 40px;
    background-color: #333;
`;

// const ItemNumber

const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const OrderCard: React.FC = () => {
    return <Container>
        <HeaderContainer>
                <ImagePlaceholder/>
            <HeaderTextContainer>               
                <MainText>
                    Restaurante Delícia 
                </MainText>
                <SubText>
                    Pedido entregue XXXX
                </SubText>
            </HeaderTextContainer>
        </HeaderContainer>
        <ItemsContainer>
        <ItemList items={[{name: 'Coxinha', quantity: 2}]} type='sub'/>
        </ItemsContainer>
        <ItemsContainer>
            <SubText>
                Avaliação do pedido: ⭐⭐⭐⭐
            </SubText>
        </ItemsContainer>


        <ButtonContainer>
            {
                ['ajuda', 'detalhes'].map((e: string) => <ButtonGen type='text--red' title={e} key={e} onPress={() => null} />)
            }
        </ButtonContainer>
    </Container> 
}

export default OrderCard;