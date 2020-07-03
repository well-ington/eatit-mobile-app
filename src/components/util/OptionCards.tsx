import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const CardContainer = styled.View`
    /* padding: 5% 10%; */
    padding-top: 10%;
`;

const CardElement = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-width: 1px;
    border-color: #ddd;
    padding: 16px 32px;
    margin-top: -1px;    
`;

const TextContainer = styled.View`
    padding-left: 7%;
`;

const TextElement = styled.Text`
    text-transform: capitalize;
`;

interface IOptionCards {
    info: {name: string, icon: string, description?: string}[];
    type: string;
}

const OptionCards: React.FC<IOptionCards> = ({info, type}) => {

    return <CardContainer>
        {info.map((e: {name: string, icon: string, description?: string}) => {

            return <CardElement>
            <Icon name={e.icon} color={'black'} size={32} />
            <TextContainer>
                <TextElement style={type === 'primary' ? styles.primary : styles.secondary}>
                    {e.name}
                </TextElement>
        {
        e.description 
        && 
        <TextElement style={styles.subtext}>
            {e.description}
        </TextElement> 
        }
            </TextContainer>
        </CardElement>
        })}
    </CardContainer>
}

const styles = StyleSheet.create({
    primary: {
        fontSize: 32
    },
    secondary: {
        fontSize: 22
    },
    subtext: {
        fontSize: 16
    }
})

export default OptionCards;