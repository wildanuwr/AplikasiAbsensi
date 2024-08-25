import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect, useRef } from 'react';

const SplashScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, scaleAnim]);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f5d']} 
      style={styles.container}
    >
      <Animated.Image
        source={require('../assets/logo.png')}
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
      />
      <Text style={styles.h1}>SIAB</Text>
      <Text style={styles.h2}>Sistem Informasi Absensi</Text>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  h1: {
    fontSize: 24,
    color: '#fff',
  },
  h2: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 20,
  },
});
