import React from 'react';
import { StyleSheet, Text, View, ScrollView , Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


import Home from './src/Home';
import Profile from './src/Profile';
import Companies from './src/Companies';
import Company_detail from './src/Company_detail';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Personal-Detail" component={Profile}  />
        <Stack.Screen name="Companies" component={Companies}  />
        <Stack.Screen name="myy" component={Company_detail}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
