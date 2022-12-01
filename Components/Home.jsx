import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MobileScreen from './Mobile_task';
function HomeScreen({navigation}) {
  return (
    <View>

      <View>
        <MobileScreen />
      </View>
    </View>
  );
}

export default HomeScreen;