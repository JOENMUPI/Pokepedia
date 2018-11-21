import React from 'react';
import Welcome from './components/welcome';
import Detail from './components/details';
import Home from './components/home';
import Abilities from './components/abilities';
import Moves from './components/moves';
import Types from './components/types';

import { createStackNavigator } from 'react-navigation';
  
export default class App extends React.Component {
   render() { return <RootStack />; }
}

const RootStack = createStackNavigator({
  welcome: { screen: Welcome },
  detail: { screen: Detail },
  home: { screen: Home },
  abilities: { screen: Abilities },
  moves: { screen: Moves },
  types: { screen: Types }
}, { initialRouteName: 'welcome' }); 