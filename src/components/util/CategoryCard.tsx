import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View`
    flex-direction: column;
    padding: 8px;
    
`;

const ImagePlaceholder = styled.View`
    width: 150px;
    height: 100px;
    background-color: crimson;
`;

const CategoryText = styled.Text`
    font-size: 26px;
    text-align: center;

`;
interface ICategoryCard {
    category: string;
}

const CategoryCard: React.FC<ICategoryCard> = ({category}) => {
    return <CardContainer>
        <ImagePlaceholder/>
        <CategoryText>
            {category}
        </CategoryText>
    </CardContainer>;
}

export default CategoryCard;