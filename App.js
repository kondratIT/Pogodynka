import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Pogodynka from "./Pogodynka";

export default function App() {
  return (
    <ImageBackground
      source={require('./IMG_20201119_114213083.jpg')}
      resizeMode="cover"
      style={styles.tlo}
    >
    <View style={styles.container}>
      <Pogodynka/>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom:40,
  },
  tlo: {
    flex: 1,
    }
});
