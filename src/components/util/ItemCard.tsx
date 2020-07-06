import React from 'react';
import styled from 'styled-components/native';
import TextGen from './TextGen';
import {View, StyleSheet} from 'react-native';

const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    /* flex-shrink: 0; */
    align-self: center;
    /* height: 220px; */
    border-width: 1px;
    border-color: #ddd;
`;

const ImagePlaceholder = styled.View`    
    background-color: rebeccapurple;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const TextHeaderContainer = styled.View`
    padding: 8px;
    flex-direction: column;
    justify-content: space-between;
`;


const PriceContainer = styled.View`
    flex-direction: row;
    margin: 20px 4px 2px 2px;
`;

const NameContainer = styled.View`
    /* margin: 0 0 16px 4px; */
`;

interface IItemCard {
    item: {
        name: string;
        description: string;
        prices: number[];
        promo: number;
    };
    type: string;
    image?: boolean;
}

const ItemCard: React.FC<IItemCard> = ({item, type, image = true}) => {
    // switch (type) {
    //     case 'highlight':
    //         return <Container style={styles.highlight}>
    //             <ImagePlaceholder/>
    //             <TextHeaderContainer>
    //                 <View>
    //                     <TextGen type='main'>
    //                         {item.name}
    //                     </TextGen>
    //                     <TextGen type='sub'>
    //                         {item.description}
    //                     </TextGen>
    //                 </View>
    //             <PriceContainer>
    //                 <TextGen color='green' type='main'>
    //                     R$ {(item.prices[0] * (1 - item.promo)).toFixed(2)}
    //                 </TextGen>
    //                 <TextGen type='sub' strike>
    //                     R$ {item.prices[0].toFixed(2)}
    //                 </TextGen>           
    //             </PriceContainer>
    //             </TextHeaderContainer>
    //         </Container>
    //     case 'list-menu':
    //         return <Container style={[styles.listMenu]}>
    //              <TextHeaderContainer>
    //                 <View>
    //                     <TextGen type='main'>
    //                         {item.name}
    //                     </TextGen>
    //                     <TextGen type='sub'>
    //                         {item.description}
    //                     </TextGen>
    //                 </View>             
    //             <PriceContainer>
    //                 <TextGen color='green' type='main'>
    //                     R$ {(item.prices[0] * (1 - item.promo)).toFixed(2)}
    //                 </TextGen>
    //                 <TextGen type='sub' strike>
    //                     R$ {item.prices[0].toFixed(2)}
    //                 </TextGen>          
    //             </PriceContainer>
    //             </TextHeaderContainer>
    //         </Container>
    //     default:
    //         return <TextGen type='main'>Ops</TextGen>;
    // }

    return <Container style={[type === 'highlight' && styles.highlight, type === 'list-menu' && [styles.listMenu, image && styles.imgToggleListMenu]]}>
            {image && <ImagePlaceholder style={[type === 'highlight' && styles.imgHighlight, type === 'list-menu' && styles.imgListMenu]}/> }
            <TextHeaderContainer style={[type === 'list-menu' && styles.HeaderListMenu]}>
                <NameContainer>
                    <TextGen type='main'>
                        {item.name}
                    </TextGen>
                    <TextGen type='sub'>
                        {item.description}
                    </TextGen>
                </NameContainer>
            <PriceContainer>
                {
                    item.promo > 0 && <TextGen style={[styles.priceMargin]} color='green' type='main'>
                    R$ {(item.prices[0] * (1 - item.promo)).toFixed(2)}
                </TextGen>
                }
                <TextGen type={item.promo > 0 ? 'sub' : 'main'} strike={item.promo > 0}>
                    R$ {item.prices[0].toFixed(2)}
                </TextGen>           
            </PriceContainer>
            </TextHeaderContainer>
        </Container>
}

const styles = StyleSheet.create({
    highlight: {
        width: 175,
        margin: 8,
        borderRadius: 5
    },
    imgHighlight: {
        height: 120
    },
    imgListMenu: {
        height: 120,
        width: 120,
        marginRight: 16,
        borderRadius: 5
    },
    listMenu: {        
        width: '100%',
        padding: 8,
        paddingTop: 16,
        paddingBottom: 16,        
        marginTop: -1,
    },
    imgToggleListMenu: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HeaderListMenu: {
        width: '60%',        
    },
    priceMargin: {
        marginRight: 8
    }
})

export default ItemCard;