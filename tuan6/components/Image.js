import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import image from '../large.png'
export default class Touch1 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Image source={{ uri: 'https://dynamic.brandcrowd.com/preview/logodraft/d62a457f-59f6-41f3-9368-ec14388a45f8/image/large.png'}} style={styles.logo} />
        <Image source={image} style={styles.logo} />
  <Text style={styles.instructions}>
    To share a photo from your phone with a friend, just....
  </Text>

  <TouchableOpacity
    onPress={() => alert('Hello, wordld!')}
    style={{ backgroundColor: 'blue'}}>
    <Text style={{ fontSize: 20, color: '#fff' }}> Pick a photo </Text>
  </TouchableOpacity>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 159,
    marginBottom: 20,
  },
  logo2: {
    width: 200,
    height: 159,
    marginBottom: 20,
  },
  instructions: {

    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});