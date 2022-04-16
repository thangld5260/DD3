import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import firebase from '../firebase';

export default function Index({ navigation }) {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [msnv, setMSNV] = useState(null);
  const [listFire, setListFire] = useState(null);


  useEffect(() => {
    try {
      firebase.database().ref('/crud').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            age: childItem.val().age,
            name: childItem.val().name,
            msnv: childItem.val().msnv
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.database().ref('/crud/' + key).remove()
  }

  function editFire(key, name, age) {
    navigation.navigate("Edit",{
      key: key,
      name: name,
      age: age,
      msnv: msnv
    });
  }


  function createFire() {
    try {
      firebase.database().ref('/crud').push({
        name: name,
        age: age,
        msnv: msnv
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setAge('');
      setName('');
      setMSNV('');
    }
  }

  return (
    <View style={styles.container}>

<Text style={styles.nhom}>
Nhóm 2 
</Text>
<Text style={styles.nhom}>
Họ tên: Bùi Trần Thắng Duy
</Text>
<Image source = {require('../assets/large.png')} style={styles.logo}/>
<Text style={styles.nhom}>
QUẢN LÝ NHÂN VIÊN
</Text>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
            <Text style={styles.text}>Họ Tên: {item.name}<br/> </Text>
            <Text style={styles.text}>Năm Sinh: {item.age} <br/></Text>
            <Text style={styles.text}>MSNV: {item.msnv} <br/></Text>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire(item.key, item.name, item.age,item.msnv) }}>
              <Text style={styles.text}>Sửa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
              <Text style={styles.text}>Xoá</Text>
            </TouchableOpacity>
          </View>

        } />

      <Image style={styles.inputIcon}/>
      <TextInput style={styles.textInput}
        onChangeText={name => setName(name)} value={name}
        placeholder='Họ tên'
      />

      <TextInput style={styles.textInput}
        onChangeText={age => setAge(age)} value={age}
        placeholder='Năm sinh'
      />

      <TextInput style={styles.textInput}
        onChangeText={mssv => setMSNV(mssv)} value={msnv}
        placeholder='Mã số nhân viên '
      />

      <TouchableOpacity style={styles.btnEnviar} onPress={createFire}>
        <Text style={styles.text}>Thêm</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFlat: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  btnEnviar: {
    borderWidth: 1,
    borderColor: 'red',
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  viewFlat: {
    maxHeight: 410,
  },
  logo:{
    width: 250,
    height: 200,
  },
  nhom:{
    fontSize: 20
  }
});