
import React from 'react';

import {Router, Stack, Scene } from 'react-native-router-flux';


import Home from './views/Home';
import { LoginPrompt } from './views/LoginPrompt';
import LoginForm from './views/LoginForm';
import { RegisterForm } from './views/RegisterForm';
import { GuestForm } from './views/GuestForm';
import BottomBar from './components/util/BottomBar';
import { connect } from 'react-redux';
import { TinitialState } from './store/reducer/main';
import { Text } from 'react-native';

// declare const global: {HermesInternal: null | {}};

interface IApp {
  user: any;
}

const App: React.FC<IApp> = ({user}) => {
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
                  <Scene key='home' component={() => <Home nav={homeNav} />} />
                }
              </Stack>
      </Router>
      {/* <Text>{user.auth}</Text> */}
      {user.auth !== -1 && <BottomBar selectedNav={homeNav} changeNav={(nextNav: number) => setHomeNav(nextNav)} />}
  </>
  );
};
// const styles = StyleSheet.create({

// });

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   firstText: {
//     textAlign: 'center'
//   }
// });
const mapStateToProps = (state: TinitialState) => {
  const t = state;
  return {
    user: t
  }
}

export default connect(mapStateToProps)(App);
