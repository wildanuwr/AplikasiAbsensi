import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './pages/HomeScreen';
// import DetailScreen from './pages/DetailScreen';
// import LoginScreen from './pages/LoginScreen';
// import { enableScreens } from 'react-native-screens';
// import SplashScreen from './pages/SplashScreen';
import RouteScreen from './Route';


const App = () => {
  return (
    <NavigationContainer>
      <RouteScreen />
    </NavigationContainer>
  );
};

export default App;

