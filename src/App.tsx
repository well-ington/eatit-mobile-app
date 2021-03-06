
import React from 'react';

import {Router, Stack, Scene, Actions } from 'react-native-router-flux';


import Home from './views/Home';
import { LoginPrompt } from './views/LoginPrompt';
import LoginForm from './views/sub/LoginForm';
import { RegisterForm } from './views/RegisterForm';
import { GuestForm } from './views/GuestForm';
import BottomBar from './components/util/BottomBar';
import { connect } from 'react-redux';
import { TinitialState, Tstore } from './store/reducer/main';
import { Text } from 'react-native';
import UserEdit from './views/UserEdit';
import LoginDrawer from './views/sub/LoginDrawer';
import Geolocation from './views/Geolocation';
import Notifications from './views/Notifications';
import MailLogin from './views/MailLogin';
import PhoneLogin from './views/PhoneLogin';
import VerificationCode from './views/VerificationCode';

// declare const global: {HermesInternal: null | {}};

interface IApp {
  auth: number;
  places: any;
  user: any;
}

const App: React.FC<IApp> = ({auth, places, user}) => {
  const [selectedNav, setSelectedNav] = React.useState(0);
  return (<>     
                {
                  auth === -1 ? <Router>
                  <Stack key='root' hideNavBar>
                    <Scene key='enableGeo' component={Geolocation} />
                    <Scene key='enableNot' component={Notifications} />
                    <Scene key='loginPrompt' component={LoginPrompt} />
                    <Scene key='phoneLogin' component={ () =>  <LoginForm type='phone' />} />
                    <Scene key='mailLogin' component={ () =>  <LoginForm type='mail' />} />
                    <Scene key='verifyCode' component={ (params: any) => <VerificationCode type={params.ID} />} />
                      {/* <Scene drawer contentComponent={LoginDrawer}>
                        <Stack hideNavBar>
                          <Scene key='loginprompt' component={LoginPrompt} />
                        </Stack>
                      </Scene>
                  <Scene key='login' component={(params: any) => <LoginForm params={params} />} />
                  <Scene key='register' component={RegisterForm} />
                  <Scene key='guest' component={GuestForm} /> */}

                </Stack>
                </Router> : <>
                  <Home userInfo={user} selectedNav={selectedNav} places={places} />
                  <BottomBar selectedNav={selectedNav} changeNav={(nextNav: number) => setSelectedNav(nextNav)} />
                </>
                }     

      
  </>
  );
};

const mapStateToProps = (state: Tstore) => {
  const t = state;
  return {
    auth: t.main.auth,
    places: t.places,
    user: t.user
  }
}

export default connect(mapStateToProps)(App);
