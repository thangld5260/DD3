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

class Xe {
  constructor(id, name, category, quantity, price, img) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.img = img;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      category: '',
      name: '',
      quantity: null,
      price: null,
      data: [],
      id: 0,
      img: '',
      temp: [],
    };
  }
  componentDidMount() {
    this.setState({ temp: this.state.data });
  }
  render() {
    const Item = ({ name, category, index, quantity, price, img }) => (
      <TouchableOpacity style={styles.item} onPress={() => setinfo(index)}>
        <View style={styles.item_container}>
          <View >
            <Text style={styles.item}>Tên: {name}</Text>
          </View>
          <View >
            <Text style={styles.item}>Loai: {category}</Text>
          </View>
          <View >
            <Text style={styles.item}>Số lượng: {quantity}</Text>
          </View>
          <View >
            <Text style={styles.item}>Giá: {price}</Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }}>
          <Image style={{ height: 50, width: 50 }} source={img}></Image>
        </View>
      </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
      <Item
        name={item.name}
        category={item.category}
        index={this.state.data.indexOf(item)}
        id={item.id}
        quantity={item.quantity}
        price={item.price}
        img={item.img}
      />
    );

    const clear = () => {
      this.setState({
        category: '',
        name: '',
        quantity: '',
        price: '',
        img: '',
      });
    };
    const add = (u) => {
      if (check() === true) {
        this.state.data.push(u);
        this.setState({ data: this.state.data });
        clear();
        this.setState({ id: this.state.id + 1 });
      }
    };
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
        name: this.state.data[u].name,
        category: this.state.data[u].category,
        quantity: this.state.data[u].quantity,
        price: this.state.data[u].price,
        img: this.state.data[u].img,
      });
    };
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
        this.state.category === '' ||
        this.state.price === '' ||
        this.state.quantity === '' ||
        this.state.quantity === ''
      ) {
        alert('Vui Lòng nhập đủ thông tin');
        return false;
      } else {
        return true;
      }
    };


    return (
      <View style={styles.container}>
        <Text style= {styles.tieude} >Tên :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            this.setState({
              name: e,
            })
          }
          value={this.state.name}
          placeholder={'nhập tên xe'}></TextInput>
        <Text style= {styles.tieude} >Loại:</Text>
        <TextInput
          style={styles.input}
          placeholder={'Nhập loại xe'}
          onChangeText={(e) =>
            this.setState({
              category: e,
            })
          }
          value={this.state.category}></TextInput>
        <Text style= {styles.tieude} >Giá :</Text>
        <TextInput
          style={styles.input}
          placeholder={'nhập giá thành xe'}
          onChangeText={(e) =>
            this.setState({
              price: e,
            })
          }
          value={this.state.price}></TextInput>
        <Text style= {styles.tieude} >Số Lượng:</Text>
        <TextInput
          style={styles.input}
          placeholder={'nhập số lượng xe'}
          onChangeText={(e) =>
            this.setState({
              quantity: e,
            })
          }
          value={this.state.quantity}></TextInput>
          <Text style= {styles.tieude} >Hình ảnh:</Text>
        <TextInput
          style={styles.input}
          placeholder={'nhập hình ảnh xe'}
          onChangeText={(e) =>
            this.setState({
              img: e,
            })
          }
          value={this.state.img}></TextInput>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'grey' }]}
            onPress={() =>
              add(
                new Xe(
                  this.state.id,
                  this.state.name,
                  this.state.category,
                  this.state.quantity,
                  this.state.price,
                  this.state.img
                )
              )
            }>
            <Text style={styles.button1}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'yellow' }]}
            onPress={() =>
              update(
                new Xe(
                  this.state.id,
                  this.state.name,
                  this.state.category,
                  this.state.quantity,
                  this.state.price,
                  this.state.img
                )
              )
            }>
            <Text style={styles.button1}>update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'blue' }]}
            onPress={() =>
              del(
                new Xe(
                  this.state.id,
                  this.state.name,
                  this.state.category,
                  this.state.quantity,
                  this.state.price,
                  this.state.img
                )
              )
            }>
            <Text >remove</Text>
          </TouchableOpacity>
        </View>
     
        <View>
          <FlatList data={this.state.temp} renderItem={renderItem} />
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
  item_container: 
  {
    borderColor:'green',
    borderWidth:2,
    padding: 5,
    marginTop:10,
    borderRadius: 10,
   
  },
  tieude:
  {
    fontSize: 20,
    color: 'blue',

  }
  

});
export default App;