import React from 'react';
import styled from 'styled-components/native';
import InputTextGen from '../../components/util/InputTextGen';
import SliderDisplay from '../../components/util/SliderDisplay';


const HomeContainer = styled.ScrollView`
    /* background-color: #fff; */
`;

const TitleText = styled.Text`
    font-size: 26px;
`;

interface IHome {
    // nav: number;
    places: any;
    params: any;
}
const ModalityText = styled.Text`
    font-size: 22px;
    text-transform: capitalize;
    margin-right: 12px;
`;

const ModalityContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 5px;
`;

const InputContainer = styled.View`
    height: 60px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #888;
    box-shadow: 2px 2px 4px black;
`;

interface IHomeSearch {
    categories: string[];
}



const HomeSearch: React.FC<IHomeSearch> = ({categories}) => {
    const [searchValue, setSearchValue] = React.useState('');
    return <>
    <InputContainer>
            <InputTextGen value={searchValue} type='sub' onChange={(event: any) => setSearchValue(event.nativeEvent.text)} />
    </InputContainer>
    <HomeContainer>                
        <SliderDisplay info={categories} type='categories--list' />
    </HomeContainer>
    </>
}

export default HomeSearch;