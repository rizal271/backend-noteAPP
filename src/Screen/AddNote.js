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
    Picker
  } from 'react-native';
  import { catALL, addALL } from "../Public/redux/actions/cat";
import { connect } from "react-redux";

class AddNote extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          Select: [],
          isModalVisible: false,
        };
    }
    componentDidMount = async () => {
        await this.props.dispatch(catALL()).then(() => {
          this.setState({
            data: this.props.cat.catList.result
          });
        });
        console.log('ini datas', this.state.Select)
    }
    render() {
    
        const Add = () => {
            const dataFile = {
              "title": this.state.title,
              "description": this.state.description,
              "id_cat" : this.state.Select
            } 
            add(dataFile);
          };
          let add = async data => {
            await this.props
              .dispatch(addALL(data))
              .then(() => { 
                alert("Berhasil ");
                this.props.navigation.navigate('Home');
              })
              .catch(err => {
                alert("Gagal " + err);
              });
          };
        return (
            <Fragment>
            <View style={items.navbar}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  overflow: "hidden"
                }}
                source={require("../Assets/img/left-arrow.png")}
              />
              
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold'}}>ADD NOTE</Text>
                <TouchableOpacity onPress={Add.bind(this)}>
                <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/img/checked.png")}
              />
                </TouchableOpacity>
                
            </View>
            <View style={{width: '85%', alignSelf: 'center', paddingTop: 40}}>
                <TextInput placeholder="ADD TITLE . . ." style={{fontSize: 15}} onChangeText={title => this.setState({ title: title })}/>
                <TextInput placeholder="ADD DESCRIPTION . . ."  multiline={true} style={{fontSize: 15, textAlignVertical: 'top', height: 145}} onChangeText={description => this.setState({ description: description })}/>
                <Text style={items.textTitle}>{'Category'.toUpperCase()}</Text>
                <Picker
                    selectedValue={this.state.Select}
                    onValueChange={(itemValue, itemIndex)=>this.setState({Select: itemValue})}>
                        
                        <Picker.Item label='Select Category' value='1' key='1'/>
                    {
                        this.state.data.map((item) => {
                
                            return (
                                <Picker.Item label={item.title_cat} value={item.id_cat} key={item.id_cat}/>
                            )
                        })
                    }
                </Picker>
            </View>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
      cat: state.cat,
    };
  };
  
  export default connect(mapStateToProps)(AddNote);

const items = StyleSheet.create({
    navbar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
        elevation: 8,
        shadowColor: '#111',
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        top: 0,
        left: '0%',
        width: '100%',
        height: 56,
        position: 'relative',
      },
      textTitle: {
        fontWeight: '600',
        fontSize: 15,
        color: '#000000'
      },
    })
