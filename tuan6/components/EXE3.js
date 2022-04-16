import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';

export default class EXE3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      mssv: '',
      faculty: '',
    }
  }

  onPress(addText) {
    Alert.alert('abc')
  }
  onPress(deleteText) {
    Alert.alert('sdas')
  }
  /*onClickListener = (addText) => {
    alert("Hello4" , "Button pressed " + addText);
  }
  onClickListener = (deleteText) => {
    alert("Hello5" , "Button pressed " + deleteText);
  }*/
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <Text>Nhóm 2</Text>
          <Text>Tên: Bùi Trần Thắng Duy</Text>
          <Image style={styles.image} source={require('../assets/large 1.png')}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/user.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Full Name"
              keyboardType="fullName"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/user.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Enter MSSV"
              keyboardType="mssv"
              underlineColorAndroid='transparent'
              onChangeText={(mssv) => this.setState({mssv})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/user.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Faculty"
              keyboardType="faculty"
              underlineColorAndroid='transparent'
              onChangeText={(faculty) => this.setState({faculty})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.fullButton]} onPress={(addText) => this.onClickListener('addText')}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.fullButton]} onPress={(deleteText) => this.onClickListener('deleteText')}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.fullButton]} onPress={(editText) => this.onClickListener('editText')}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.fullButton]} onPress={(clearText) => this.onClickListener('clearText')}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableHighlight>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: 250,
    borderRadius: 30,
  },
  fullButton: {
    backgroundColor: '#00b5ec',
  },
  buttonText: {
    color: 'white',
  },
  group: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    color: 'red',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    width: 250,
    height: 200
    
  },
});