import React, { Component } from 'react';
import { Text, View, AppRegistry, TextInput } from 'react-native';

export default class TextInputEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: 'please type your here',
    };
  }
  render() {
    return (
      <View>
        <TextInput style={ {
          height: 40,
          margin: 20,
          padding: 10,
          borderColor: 'gray',
          borderWidth: 1
        }}
        keyboardType='email-address'
        placeholder='Enter your email'
        placeholderTextColor='red'
        onChangeText={
          (text) => {
            this.setState(
              (previousState) => {
                return {
                  typedText: text
                };
              }
            );
          }
        }
      />
      </View>
    );
  }
}