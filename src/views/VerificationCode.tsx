import React from 'react';

import styled from 'styled-components/native';
import InputTextGenerator from '../components/util/InputTextGenerator';
import TextGen from '../components/util/TextGen';
import { ButtonGen } from '../components/util/ButtonGen';
import AlertModal from './sub/AlertModal';
import { TouchableHighlight } from 'react-native';
import BottomModal from './sub/BottomModal';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { doLogin } from '../store/actions/main';

const Container = styled.View`
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

const TextContainer = styled.View`
    margin-top: 32px;
`;



const InputContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 16px;
`;

const ButtonContainer = styled.View`
    /* position: absolute; */
    bottom: 0%;
    width: 100%;
`;

const ModalTextContainer = styled.View`
    padding: 8px 0;
`;

interface IVerificationCode {
    type: string;
    login: (type: string) => void;
}

const VerificationCode: React.FC<IVerificationCode> = ({type, login}) => {
    const [codeBody, setCodeBody] = React.useState(['','','','','']);
    const [alertType, setAlertType] = React.useState({
        type: 'none', message: ''
    });
    const [resendOpt, setResendOpt] = React.useState(false);

    const verif = codeBody.toString().replace(/,/g,'');
    if (verif.length === 5 && verif === '11111' && alertType.type !== 'error') {
        setAlertType({
            type: 'error', message: "The code you provide doesn't match, please try again"
        });
    } else if (verif.length < 5 && alertType.type === 'error') {
        setAlertType({
            type: 'none', message: ''
        });
    }
    const onChangeInput: (event: any, id: number) => void = (event, id) => {
        let newBody = [...codeBody];
        newBody[id] = event.nativeEvent.text;
        setCodeBody(newBody);
    }
    

    return <Container>
            {
                alertType.type !== 'none' && <AlertModal type={alertType.type}>
                {alertType.message}
            </AlertModal>
            }
        <TextContainer>          

            <TextGen type='main'>
            Type down the verification code we’ve sent through SMS/WHATSAPP to (00) 0 0000-0000
            </TextGen>
            <InputContainer>
            {
                codeBody.map((e: string, i: number) => <InputTextGenerator error={alertType.type === 'error'} small maxLength={1} center key={`key_verification_${i}`} value={e} onChange={(event: any) => onChangeInput(event, i)} />)
            }
            </InputContainer>        
        </TextContainer>

    
    
    

        <ButtonContainer>
                <TextGen type='main'>
                To re-send the code, please wait for 00:00
                </TextGen>
                <TouchableHighlight onPress={() => setResendOpt(true)}>
                    <TextGen type='sub' color='red'>
                    I did not received the code
                    </TextGen>
                </TouchableHighlight>                
            <ButtonGen type='primary' nopadding color='gray' onPress={() => login('login')} title='Confirm' />
        </ButtonContainer>
        
        {
            resendOpt && <BottomModal>
                 <ModalTextContainer>
                        <TextGen bold center type='title'>
                            Haven't received the code?
                        </TextGen>
                        <TextGen center type='main'>
                        Check if you typed correctly your {
                            type === 'phone' ? 'number correctly. SMS messages may have some delay.' : 'e-mail correctly. E-mails may have some delay.'
                        }
                        </TextGen>
                    </ModalTextContainer>
                    {
                        [...(type === 'phone' ? ['Re-send through main opt', 'Re-send using another opt', 'Enter using e-mail'] : ['Re-send e-mail', 'Change e-mail'])].map((e: string, i: number) => <ButtonGen 
                        type={['primary','secondary','text'][i]}
                        onPress={() => {
                            if ((i < 2 && type === 'phone') || (i < 1 && type !== 'phone')) {
                                setResendOpt(false);
                                setAlertType({
                                    type: 'success',
                                    message: 'Code successfully re-sent!'
                                });
                            } else {
                                Actions.mailLogin();
                            }

                        }}
                        title={e}
                        key={e + i}
                        />)
                    }
            </BottomModal>
        }
    </Container>
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (type: string) => dispatch(doLogin(type))
    }
}

export default connect(null, mapDispatchToProps)(VerificationCode);