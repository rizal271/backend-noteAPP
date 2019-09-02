import React, { Component, Fragment } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    FlatList,
    TextInput,
    Button
  } from 'react-native';
  import Axios from "axios";
import { catALL } from "../Public/redux/actions/cat";
import { connect } from "react-redux";
import Modal from 'react-native-modal';

class Drawer extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          isModalVisible: false,
        };
    }
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };
    componentDidMount = async () => {
        await this.props.dispatch(catALL()).then(() => {
          this.setState({
            spinner: false,
            data: this.props.cat.catList.result
          });
        });
        console.log('ini data', this.state.data)
    }
    render() {
        return (
            <Fragment>
            <View style={items.profile}>
              <Image
                style={items.image}
                source={{uri: 'http://i0.wp.com/profilepicture7.com/bao/bao_haokan/1/880191293.jpg'}}
              />
              <Text style={items.name}>Rizal Gue</Text>
            </View>
            <View>
            <FlatList
                  data={this.state.data}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={items.flhome}
                        // onPress={() =>
                        //   this.props.navigation.navigate(item.Menuname)
                        // }
                      >
                        <Image style={{ width:24, height:24 }} source={{uri: item.icon}}/>
                        <Text numberOfLines={1} style={items.drawer}>
                          {item.title_cat}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
                <TouchableOpacity style={items.flhome} onPress={this.toggleModal}>
                <Image style={{ width:24, height:24 }} source={require("../Assets/img/plus.png")}/>
                        <Text numberOfLines={1} style={items.drawer}>
                         Add Category
                        </Text>
                </TouchableOpacity>
            </View>
            <Modal isVisible={this.state.isModalVisible}>
            <View style={{position: 'absolute', alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={this.toggleModalClose}>
<Text></Text>
              </TouchableOpacity>
            </View>
                <View style={{backgroundColor: '#fff',
              height: 150,
              borderRadius: 10,
              flexDirection: 'column'}}>
                  <View style={{padding:10}}>
                  <TextInput
              style={items.textInput}
              placeholder="Cat"
              onChangeText={title_cat => this.setState({title_cat: title_cat})}
            />
            <TextInput
              style={items.textInput}
              placeholder="Hex Collor"
              onChangeText={title_cat => this.setState({title_cat: title_cat})}
            />
                  </View>
                 
                <View >
                <Button
              color="#20a8e0"
              title="Input"
              onPress={this.toggleModal}
              accessibilityLabel="Learn more about this purple button"
            />
                </View>
                </View>
                 
            </Modal>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      cat: state.cat,
    };
  };
  
  export default connect(mapStateToProps)(Drawer);
const items = StyleSheet.create({
    profile: {
        alignItems: "center",
        margin: 15
      },
      image: {
        width: 95,
        height: 96,
        borderRadius: 54
      },
      name: {
        fontSize: 17,
        marginTop: 10,
        fontWeight: "bold",
        color: "#000000"
      },
      drawer: {
        margin: 10,
        fontWeight: "600",
        color: "#000",
        fontSize: 15,
        paddingLeft: 10
      },
      flhome: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 18
      },
      textInput: {
        height: 40,
        backgroundColor: '#f5f5f1',
        borderRadius: 24,
        marginBottom: '5%',
        padding: 10,
      },
})