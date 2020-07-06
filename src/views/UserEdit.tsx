import React from 'react';
import styled from 'styled-components/native';

import InputTextGen from '../components/util/InputTextGen';
import { connect } from 'react-redux';
import { ButtonGen } from '../components/util/ButtonGen';
import { updateUser } from '../store/actions/main';

const Container = styled.View`
    flex-direction: column;
    /* -items: center; */
    height: 100%;
    justify-content: space-evenly;
`;

interface IUserEdit {
    userInfo: any;
    saveChanges: (user: any) => void;
}

const UserEdit: React.FC<IUserEdit> = ({userInfo, saveChanges}) => {

    const [userName, setUserName] = React.useState(userInfo.name);
    const [userID, setUserID] = React.useState(userInfo.id);
    const [userPhone, setUserPhone] = React.useState(userInfo.phone);
    const [userMail, setUserMail] = React.useState(userInfo.mail); 
    
    return <Container>
        {
            [
                {name: 'Nome', update: (event: any) => setUserName(event.nativeEvent.text)},
                {name: 'CPF', update: (event: any) => setUserID(event.nativeEvent.text)},
                {name: 'Telefone', update: (event: any) => setUserPhone(event.nativeEvent.text)},
                {name: 'E-mail', update: (event: any) => setUserMail(event.nativeEvent.text)}
            ].map((e: {name: string, update: (event: any) => void}, i: number) => {            
          
            return <InputTextGen key={i + e.name} label={e.name} value={[userName, userID, userPhone, userMail][i]} type='sub' onChange={e.update} />})
        }
        <ButtonGen type='primary' onPress={() => saveChanges({name: userName, id: userID, phone: userPhone, mail: userMail})} title='confirmar' />
    </Container>
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        saveChanges: (user: {name: string, id: string, mail: string, phone: string  }) => dispatch(updateUser(user))
    }
}

export default connect(null, mapDispatchToProps)(UserEdit);