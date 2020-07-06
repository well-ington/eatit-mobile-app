import React from 'react';
import styled from 'styled-components/native';
import TextGen from '../../components/util/TextGen';
import ItemCard from '../../components/util/ItemCard';
import { FlatList } from 'react-native';

const Container = styled.ScrollView`

`;

interface IHomeRestaurant {
    place: any;
}

const CategoryContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    /* text-align: center; */
`;

const SideScrollView = styled.ScrollView`
    
`;

const HomeRestaurant: React.FC<IHomeRestaurant> = ({place: {name, deliveryFee, rating, menu, categories, promo}, place}) => {
    // console.log(promo.length);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    // return <Container>
    //     <CategoryContainer>
    //     <TextGen type='main'>
    //         {name}
    //     </TextGen>
    //     </CategoryContainer>
    //     <CategoryContainer>
    //         <TextGen type='sub'>
    //             {categories[0]}
    //         </TextGen>
    //         <TextGen type='sub'>
    //             {rating.toFixed(1)}
    //         </TextGen>
    //     </CategoryContainer>
    //     {
    //         promo.length > 0 && <SideScrollView horizontal>
    //             {
    //                 promo.map((e: [number, number], index: number) => <ItemCard type='highlight' key={`${e[0]}_${Math.random() * 900}`} item={place.menu[e[0]].items[e[1]]} />)
    //             }
    //         </SideScrollView>
    //     }

    //     <FlatList data={menu} renderItem={({item, index}) =><>
    //         <TextGen type='main'>{item.section}</TextGen>
    //         <TextGen type='main'>{item.description}</TextGen>
    //     {
    //        index === selectedIndex && item.items.map((e: any) => <ItemCard type='' item={e} />)
    //     }
    //     </>} />
    // </Container>

    return <FlatList data={[
        <CategoryContainer>
            <TextGen type='main'>
                {name}
            </TextGen>
        </CategoryContainer>,
         <CategoryContainer>
         <TextGen type='sub'>
             {categories[0]}
         </TextGen>
         <TextGen type='sub'>
             {rating.toFixed(1)}
         </TextGen>
        </CategoryContainer>,
        <>
         {
            promo.length > 0 && <SideScrollView horizontal>
                {
                    promo.map((e: [number, number], index: number) => <ItemCard type='highlight' key={`${e[0]}_${Math.random() * 900}`} item={place.menu[e[0]].items[e[1]]} />)
                }
            </SideScrollView>
        }
        </>,
         <FlatList data={menu} keyExtractor={(item, index) => `${index}_menu`}
         renderItem={({item, index}) =><>
         <TextGen type='main'>{item.section}</TextGen>
         <TextGen type='sub'>{item.description}</TextGen>
            {
                item.items.map((e: any, index: number) => <ItemCard type='list-menu' image={index < 5} key={`${index}_${e}`} item={e} />)
            }
            </>} />
        ]} keyExtractor={(item, index) => `${index}_restaurant_child`}
        renderItem={({item, index}) => <>
        {item}
        </>} />

}


export default HomeRestaurant;