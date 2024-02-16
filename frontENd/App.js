import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import Home from './screens/HomeScreen';
import Details from './screens/DetailScreen';
import Tojrab from './screens/Tabs/Tojrab';
import Tojrab2 from './screens/Tabs/Tojrab2'
import HomeStack from './screens/Stack/HomeStack';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}