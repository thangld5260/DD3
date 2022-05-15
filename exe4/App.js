import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
var link = "https://nhom7-sv-api.herokuapp.com/sinhvien/";


class User {
  constructor(id, tenSV, lop,  diachi, HinhAnh) {
    this.id = id;
    this.tenSV = tenSV;
    this.lop = lop;
    this.diachi = diachi;
    this.HinhAnh = HinhAnh;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lop: '',
      tenSV: '',
      diachi: '',
      data: [],
      id: 0,
      HinhAnh: '',
      temp: [],
    };
  }
  componentDidMount() {
    fetch(link, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
   })
  .then((response) => response.json())
    .then((json) => {
      this.setState({data:json});
    })
    .catch((error) => {
      console.error(error);
    });
  }
 
  render() {

    const Item = ({ tenSV, lop, index, diachi, HinhAnh }) => (
      <TouchableOpacity style={[styles.item],{marginBottom:10, flexDirection:'row', borderColor:'black',borderWidth:2, padding:5}} onPress={() => setinfo(index)}>
        <View style={{ borderWidth: 1 }}>
          <Image style={{ height: 60, width: 60 }} source={HinhAnh}></Image>
        </View>
        <View style={{flex:1,marginLeft: 5} }>
          <View style={{ borderWidth: 1 }}>
            <Text style={styles.showitem}> {tenSV}</Text>
          </View>
          <View style={{ borderWidth: 1 }}>
            <Text style={styles.showitem}> {lop}</Text>
          </View>
          <View style={{ borderWidth: 1 }}>
            <Text style={styles.showitem}>{diachi}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
      <Item
        tenSV={item.tenSV}
        lop={item.lop}
        index={this.state.data.indexOf(item)}
        id={item.id}
        diachi={item.diachi}
        img={item.img}
      />
    );
    const getdata=()=>{
        fetch(link, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
   })
  .then((response) => response.json())
    .then((json) => {
      this.setState({data:json});
    })
    .catch((error) => {
      console.error(error);
    });
    }
 const them =()=>{
     fetch(link, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    tenSV:this.state.tenSV,
    lop:this.state.lop,
    diachi:this.state.diachi,
    HinhAnh:this.state.HinhAnh
  })
   })
  .then((response) => response.json())
    .then((json) => {
      getdata()
    }
  );
  }
  const sua =()=>{
   fetch(link+this.state.id, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    tenSV:this.state.tenSV,
    lop:this.state.lop,
    diachi:this.state.diachi,
    HinhAnh:this.state.HinhAnh,
    id:this.state.id
  })
   })
  .then((response) => response.json())
    .then((json) => {
     getdata()
    });
}
  const xoa=()=>{
 fetch(link+this.state.id, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
   })
  .then((response) => response.json())
    .then((json) => {
       getdata()
    });
  }
    const clear = () => {
      this.setState({
        temp: '',
        lop: '',
        diachi: '',
        HinhAnh: '',
      });
    };
    //Thêm
    const add = (u) => {
      if (check() === true) {
        this.state.data.push(u);
        this.setState({ data: this.state.data });
        clear();
        this.setState({ id: this.state.id + 1 });
      }
    };
    //Xóa
    const del = (u) => {
      var array = [...this.state.data];
      var index = array.findIndex((data) => data.id == u.id);
      if (check()) {
        if (index !== -1) {
          array.splice(index, 1);
           this.setState({ data: array,temp:array });
        }
        clear();
      }
    };
    const setinfo = (u) => {
      this.setState({
        id: this.state.data[u].id,
        tenSV: this.state.data[u].tenSV,
        lop: this.state.data[u].lop,
        diachi: this.state.data[u].diachi,
        HinhAnh: this.state.data[u].HinhAnh,
      });
    };
    //Sửa
    const update = (u) => {
      var array = [...this.state.data];
      var index = array.findIndex((x) => x.id === u.id);
      if (check()) {
        array[index] = u;
        this.setState({ data: array,temp:array });

        clear();
      }
    };
    const check = () => {
      if (
        this.state.name === '' ||
        this.state.nation === '' ||
        this.state.so === '' ||
        this.state.img === ''
      ) {
        alert('Vui Lòng nhập đủ thông tin');
        return false;
      } else {
        return true;
      }
    };

    const handleSearch = (text) => {
      if (text) {
        const newData = this.state.data.filter(function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({ data: newData });
      } else {
       
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>nhom7</Text>
        <Text style={styles.title}>Quan Ly sinhvien</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            this.setState({
              tenSV: e,
            })
          }
          value={this.state.tenSV}
          placeholder={'Tên sv'}></TextInput>
        <TextInput
          style={styles.input}
          placeholder={'Lop'}
          onChangeText={(e) =>
            this.setState({
              lop: e,
            })
          }
          value={this.state.lop}></TextInput>
        <TextInput
          style={styles.input}
          placeholder={'Dia chi'}
          onChangeText={(e) =>
            this.setState({
              diachi: e,
            })
          }
          value={this.state.diachi}></TextInput>
        <TextInput
          style={styles.input}
          placeholder={'hình sinh viên'}
          onChangeText={(e) =>
            this.setState({
              HinhAnh: e,
            })
          }
          value={this.state.HinhAnh}></TextInput>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'yellow' }]}
            onPress={() =>
             them()
              
            }>
            <Text style={styles.button1}>them</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'yellow' }]}
            onPress={() =>
             sua()
            }>
            <Text style={styles.button1}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'yellow' }]}
            onPress={() =>
              xoa()
            }>
            <Text style={styles.button1}>Xóa</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={[styles.input, { marginVertical: 20 }]}
            placeholder={'tim kiem'}
            onChangeText={(e) => handleSearch(e)}
          />
        </View>
        <View>
          <FlatList data={this.state.data} renderItem={renderItem} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    width: '100%',
    borderColor: '#000',
    padding: 10,
    marginVertical: 2,
    alignSelf: 'center',
  },
  button: {
    padding: 5,
    marginHorizontal: 5,
    marginTop: 20,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
});
export default App;