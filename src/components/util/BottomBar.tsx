import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';
import { Keyboard, StyleSheet } from 'react-native';

const BarContainer = styled.View`
    background-color: #eee;
    height: 10%;    
    display: flex;
    /* flex: 1; */
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledTouchable = styled.TouchableHighlight`
    background-color: #fff;
    padding: 7px;
    border-radius: 200px;
`;

interface IBottomBar {
    selectedNav: number;
    changeNav: (newNav: number) => void;
}

const BottomBar: React.FC<IBottomBar> = ({selectedNav, changeNav}) => {
    const [toggle, setToggle] = React.useState(false);
    React.useEffect(() => {
            const _keyboardDidShow = () => setToggle(true);
            const _keyboardDidHide = () => setToggle(false);
            
            Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        
            return () => {
              Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
              Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
            }
    }, [Keyboard, setToggle]);
    return toggle ? null : <BarContainer>
        {
            ['home', 'search1', 'solution1', 'user'].map((name: string, index: number) => <StyledTouchable 
            style={index === selectedNav && styles.active} 
            onPress={() => changeNav(index)} key={name}
            >
            <Icon name={name} color={index === selectedNav ? '#fff' : '#111'} size={32} />
        </StyledTouchable>)
        }
    </BarContainer>
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: '#000',
    }
});

export default BottomBar;