import Home from './src/Components/Home';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sobre from './src/Components/About';

const Stack = createStackNavigator(); 


export default function App(){
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

