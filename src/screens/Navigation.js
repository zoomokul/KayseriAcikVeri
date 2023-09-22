import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import HomePage from './HomePage';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';
import Screen7 from './Screen7';
import BoroughDetailScreen from './BoroughDetailScreen';
import Screen8 from './Screen8';
import Content from "./ContentScreen"
import Screen9 from './Screen9';


const Stack = createStackNavigator();

const Navigation = ({ navigation }) => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
        <Stack.Screen name="Screen6" component={Screen6} />
        <Stack.Screen name="Screen7" component={Screen7} />
        <Stack.Screen name="BoroughDetailScreen" component={BoroughDetailScreen} />
        <Stack.Screen name="Screen8" component={Screen8} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Screen9" component={Screen9} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigation;
