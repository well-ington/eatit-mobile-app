import React from 'react';
import styled from 'styled-components/native';
import TextGen from '../../components/util/TextGen';
import ItemCard from '../../components/util/ItemCard';
import { FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Tstore } from 'src/store/reducer/main';

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

const HomeRestaurant: React.FC<IHomeRestaurant> = ({place}) => {
    // console.log(place);
    return place ? <>
    <FlatList  onScroll={(event: any) => console.log(event)} data={[
        <CategoryContainer>
            <TextGen type='main'>
                {place.name}
            </TextGen>
        </CategoryContainer>,
         <CategoryContainer>
         <TextGen type='sub'>
             {place.categories[0]}
         </TextGen>
         <TextGen type='sub'>
             {place.rating.toFixed(1)}
         </TextGen>
        </CategoryContainer>,
        <>
         {
            place.promo.length > 0 && <SideScrollView horizontal>
                {
                    place.promo.map((e: [number, number], index: number) => <ItemCard type='highlight' key={`${e[0]}_${Math.random() * 900}`} item={place.menu[e[0]].items[e[1]]} />)
                }
            </SideScrollView>
        }
        </>,
         <FlatList data={place.menu} keyExtractor={(item, index) => `${index}_menu`}
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
    </> : null;
}

const mapStateToProps = (state: Tstore) => {
    const t = state;
    return {
        place: t.places.places[t.main.selectedRestaurant]
    }
}

export default connect(mapStateToProps)(HomeRestaurant);

// export default HomeRestaurant;