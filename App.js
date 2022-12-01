import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/Home';
import MobileScreen from './Components/Mobile_task';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Mobile Task" component={HomeScreen} />
        {/* <Stack.Screen name="Mobile Task" component={MobileScreen} /> */}
        {/* <Stack.Screen name="Algorithm Task" component={AlgorithmScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
