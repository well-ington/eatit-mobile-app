import React from 'react';

import styled from 'styled-components/native';
import TextGen from './TextGen';


interface IItemList {
    items: {name: string, quantity: number, price?: number}[];
    type: string;
}

const ListContainer = styled.View`
    
`;

const SubView = styled.View`
    flex-direction: row;
    align-items: center;
`;

const QuantityContainer = styled.View`
    border-width: 1px;
    border-color: #999;
    padding: 2px 6px;
    margin-right: 16px;
`;

const ItemList: React.FC<IItemList> = ({items, type}) => {
    switch (type) {
        case 'sub':
            return <ListContainer>
                {
                    items.map((e: any, index: number) => {
                        if (index < 2) {
                            return (<SubView key={e.name + index}>
                            <QuantityContainer>
                                <TextGen type='sub'>
                                    {e.quantity}
                                </TextGen>
                            </QuantityContainer>
                            <TextGen type='sub'>
                                {e.name}
                            </TextGen>
                            </SubView>);
                        }
                        if (index === 2) {
                            return (<TextGen type='sub' center>Ver mais</TextGen>);
                        }

                    })
                }
            </ListContainer>
        default:
            return <ListContainer>

        </ListContainer>
    }    
}

export default ItemList;