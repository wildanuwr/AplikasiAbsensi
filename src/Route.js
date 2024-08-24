import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import LoginScreen from './pages/LoginScreen';
import SplashScreen from './pages/SplashScreen';
import { enableScreens } from 'react-native-screens';
import HouseIcon from './assets/HouseIcon.svg';
import CalendarIcon from './assets/CalendarIcon.svg';
import CameraIcon from './assets/CameraIcon.svg';
import ReportIcon from './assets/ReportIcon.svg';
import ProfileIcon from './assets/ProfileIcon.svg';

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  
  return (
    <Tab.Navigator>
<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <HouseIcon width={size} height={size} fill={color} />
    ),
  }}
/>

<Tab.Screen
  name="Kalender"
  component={DetailScreen}
   options={{
    tabBarIcon: ({ color, size }) => (
      <CalendarIcon width={size} height={size} fill={color} />
    ),
  }}
/>

<Tab.Screen
  name="Absen"
  component={DetailScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <CameraIcon width={size} height={size} fill={color} />
    ),
  }}
/>

<Tab.Screen
  name="Laporan"
  component={DetailScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <ReportIcon width={size} height={size} fill={color} />
    ),
  }}
/>

<Tab.Screen
  name="Profil"
  component={DetailScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <ProfileIcon width={size} height={size} fill={color} />
    ),
  }}
/>

  </Tab.Navigator>
  );
};

const RouterScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RouterScreen;
