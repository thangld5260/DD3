import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';
//import Button from './components/Button'
//import TextInput from './components/TextInput'
//import Image from './components/Image'
//import Login from './components/Login'
import EXE3 from './components/EXE3'
// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <EXE3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
