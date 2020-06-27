
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppBar from './components/AppBar';
import Home from './views/Home';
import { LoginPrompt } from './views/LoginPrompt';
import { LoginForm } from './views/LoginForm';
import { RegisterForm } from './views/RegisterForm';
import { GuestForm } from './views/GuestForm';

// declare const global: {HermesInternal: null | {}};

const App = () => {
  return (<>
      <Router>
              <Stack hideNavBar key='root'>
                <Scene key='loginprompt' component={LoginPrompt} />
                <Scene key='login' component={LoginForm} />
                <Scene key='register' component={RegisterForm} />
                <Scene key='guest' component={GuestForm} />
                <Scene key='home' component={Home} />
              </Stack>
      </Router>
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

export default App;
