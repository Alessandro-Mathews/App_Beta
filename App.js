import Home from './src/Components/Home';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from './src/Components/About';

const Stack = createStackNavigator(); 


export default function App(){
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name=" " component={Home} />
      <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

