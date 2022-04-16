import React, {Component} from 'react';
import {Alert, StyleSheet, View, Button, TextInput} from 'react-native';

export default class Button1 extends Component {
  _onPressButton = () => {
    alert("");
  }
  render() {
    return(
      <View style={{ backgroundColor: 'green', 
      padding: 10,
      borderRadius: 16,
      shadowRadius: 20,
      shadowOpacity: 0.5
      }}>
      <Button onPress={this._onPressButton}
      title="This is a button"
      color='red'
      />

      </View>
    )
  }
}