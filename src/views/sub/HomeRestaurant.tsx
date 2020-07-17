import React from 'react';
import styled from 'styled-components/native';
import TextGen from '../../components/util/TextGen';
import ItemCard from '../../components/util/ItemCard';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { Tstore } from 'src/store/reducer/main';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.ScrollView`

`;

interface IHomeRestaurant {
    place: any;
}
const CategoryContainer = styled.View`
    padding: 24px 16px;
`;

const SubCategoryContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    /* padding: 8px; */
    /* text-align: center; */
`;

const SideScrollView = styled.ScrollView`
    
`;

const SubIconView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 106px;
`;

const PaddingContainer = styled.View`
    padding: 42px 16px;
`;

const HeaderView = styled.View`
    height: 125px;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    background-color: limegreen;
`;

const HomeRestaurant: React.FC<IHomeRestaurant> = ({place}) => {
    return <FlatList data={[
        <HeaderView>
            <Icons name='chevron-left' size={48} color='white' />
            <SubIconView>
                <Icons name='share-outline' size={48} color='white' />
                <Icons name='heart-outline' size={48} color='white' />
            </SubIconView>
            
        </HeaderView>,
        <CategoryContainer>
            <TextGen type='restname'>
                {place.name}
            </TextGen>
            <SubCategoryContainer>
                <TextGen type='sub'>
                {place.categories[0]} * 0.0 km *
            </TextGen>
            <TextGen type='main' color='yellow'>
            ⭐{place.rating.toFixed(1)} ({~~(Math.random() * 200)})
            </TextGen>
            </SubCategoryContainer>
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
         <PaddingContainer>
            <TextGen type='title'>{item.section}</TextGen>
            <TextGen type='sub'>{item.description}</TextGen>
         </PaddingContainer>
            {
                item.items.map((e: any, index: number) => <ItemCard type='list-menu' image={index < 5} key={`${index}_${e}`} item={e} />)
            }
            </>} />
        ]} keyExtractor={(item, index) => `${index}_restaurant_child`}
        renderItem={({item, index}) => <>
        {item}
        </>} />;
}

const mapStateToProps = (state: Tstore) => {
    const t = state;
    return {
        place: t.places.places[t.main.selectedRestaurant]
    }
}

export default connect(mapStateToProps)(HomeRestaurant);
