
import React from 'react';

import {Router, Stack, Scene, Actions } from 'react-native-router-flux';


import Home from './views/Home';
import { LoginPrompt } from './views/LoginPrompt';
import LoginForm from './views/LoginForm';
import { RegisterForm } from './views/RegisterForm';
import { GuestForm } from './views/GuestForm';
import BottomBar from './components/util/BottomBar';
import { connect } from 'react-redux';
import { TinitialState, Tstore } from './store/reducer/main';
import { Text } from 'react-native';
import UserEdit from './views/UserEdit';

// declare const global: {HermesInternal: null | {}};

interface IApp {
  auth: number;
  places: any;
  user: any;
}

const App: React.FC<IApp> = ({auth, places, user}) => {
  const [selectedNav, setSelectedNav] = React.useState(0);
  return (<>
      <Router>
              <Stack hideNavBar key='root'>
                {
                  auth === -1 ? <Stack hideNavBar>
                  <Scene key='loginprompt' component={LoginPrompt} />
                  <Scene key='login' component={LoginForm} />
                  <Scene key='register' component={RegisterForm} />
                  <Scene key='guest' component={GuestForm} />
                </Stack> : <Stack hideNavBar>
                  <Scene key='home' component={(params: any) => <Home userInfo={user} selectedNav={selectedNav} places={places} params={params} />} />
                  <Scene key='userEdit' component={() => <UserEdit userInfo={user} />} />
                  </Stack>
                }
              </Stack>
      </Router>

      {auth !== -1 && <BottomBar selectedNav={selectedNav} changeNav={(nextNav: number) => setSelectedNav(nextNav)} />}
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
