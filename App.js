import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './Home';

const a = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(a);

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    );
  }
}