
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
import { Login } from './views/Login';

// declare const global: {HermesInternal: null | {}};

const App = () => {
  return (<>
    {/* <View><Button title='aha' onPress={() => Actions.home()}></Button></View> */}
    <Router>
              <Stack hideNavBar key='root'>
                <Scene key='login' component={Login} />
                <Scene key='home' component={Home} />
              </Stack>
      </Router>
  </>
  );
};
const styles = StyleSheet.create({

});

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   firstText: {
//     textAlign: 'center'
//   }
// });

export default App;
