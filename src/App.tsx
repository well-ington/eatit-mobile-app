
import React from 'react';

import {Router, Stack, Scene } from 'react-native-router-flux';


import Home from './views/Home';
import { LoginPrompt } from './views/LoginPrompt';
import LoginForm from './views/LoginForm';
import { RegisterForm } from './views/RegisterForm';
import { GuestForm } from './views/GuestForm';
import BottomBar from './components/util/BottomBar';
import { connect } from 'react-redux';
import { TinitialState, Tstore } from './store/reducer/main';
import { Text } from 'react-native';

// declare const global: {HermesInternal: null | {}};

interface IApp {
  user: any;
  places: any;
}

const App: React.FC<IApp> = ({user, places}) => {
  const [homeNav, setHomeNav] = React.useState(0);
  return (<>
      <Router>
              <Stack hideNavBar key='root'>
                {
                  user.auth === -1 ? <>
                  <Scene key='loginprompt' component={LoginPrompt} />
                  <Scene key='login' component={LoginForm} />
                  <Scene key='register' component={RegisterForm} />
                  <Scene key='guest' component={GuestForm} />
                </> :
                  <Scene key='home' component={() => <Home nav={homeNav} places={places} />} />
                }
              </Stack>
      </Router>
      {/* <Text>{user.auth}</Text> */}
      {user.auth !== -1 && <BottomBar selectedNav={homeNav} changeNav={(nextNav: number) => setHomeNav(nextNav)} />}
  </>
  );
};

const mapStateToProps = (state: Tstore) => {
  const t = state;
  return {
    user: t.main,
    places: t.places
  }
}

export default connect(mapStateToProps)(App);
