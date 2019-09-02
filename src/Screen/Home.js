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
    ScrollView
  } from 'react-native';
  import { noteALL } from "../Public/redux/actions/cat";
  import { connect } from "react-redux";
  import moment from "moment";
 class Home extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
        };
    }
    componentDidMount = async () => {
        await this.props.dispatch(noteALL()).then(() => {
          this.setState({
            spinner: false,
            data: this.props.cat.catList.result
          });
        });
        console.log('ini n', this.state.data)
    }
    render() {
        return (
            <Fragment>
                <View></View>
            <View style={items.navbar}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  overflow: "hidden"
                }}
                source={{uri: 'http://i0.wp.com/profilepicture7.com/bao/bao_haokan/1/880191293.jpg'}}
              />
              
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold'}}>NOTEAPP</Text>
                <TouchableOpacity>
                <Image
                style={{ width: 25, height: 25 }}
                source={require("../Assets/img/download.png")}
              />
                </TouchableOpacity>
                
            </View>
            <View style={{padding:10, elevation:10}}>
            <TextInput
              style={items.textSearch}
              placeholder="Search"
            />
            
            </View>
            
        <ScrollView>
        <View style={{alignItems: 'center', flexDirection: 'row', margin: 8}}>
        <FlatList
						data = { this.state.data }
						numColumns = {2}
						onEndReachedThreshold= {0.2}
						// onEndReached = {()=>this.moreData()}
						keyExtractor = {(item) => item.id_cat.toString()}
						// refreshing={this.props.notes.isLoading}
	            		// onRefresh={this.getData}
						renderItem = {({item, index}) => {
							return (
							<TouchableOpacity
								onPress={() => {this.props.navigation.navigate('EditNote', item)}}
								// onLongPress={() => {this.deleteData(item.id)} }
								style={{
									flex: 1, height: 140, margin: 9, borderRadius: 5, elevation: 2,
									backgroundColor: item.hex_Collor}}>
								<Text style={items.textDate}>{moment(item.created_at).format("D MMMM")}</Text>
								<Text numberOfLines={1} style={items.textTitle}>{item.title}</Text>
								<Text numberOfLines={1} style={items.textBottom}>
									{
										(item.title_cat == null) ? '-' : item.title_cat
									}
								</Text>
								<Text numberOfLines={5} style={items.textDescription}>{item.description}</Text>
							</TouchableOpacity>
							);
						}
					}>
                        
					</FlatList>
                    <View style={items.floatmenuProfil}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddNote')}
            style={{
              width: 60,
              height: 60,
              marginEnd: 100,
              elevation: 5,
              borderRadius: 100,
              backgroundColor: '#fff',
            }}>
            <Text style={{width: 50,
                height: 50,
                marginTop: '5%',
                marginLeft: '34%',
                fontSize: 37,
                fontWeight: 'bold',
                color: '#000'}}>+</Text>
          </TouchableOpacity>
        </View>
                    </View>
                    </ScrollView>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
      cat: state.cat,
    };
  };
  
  export default connect(mapStateToProps)(Home);

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
      textSearch: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 24,
        marginTop: 30,
        elevation:4,
        padding: 7
      },
      floatmenuProfil: {
        flexDirection: 'column',
        position: 'absolute',
        margin: '77%',
        marginTop: '300%',
        width: '100%',
        height: 100,
      },
      textDate: {
		margin: 5, 
		fontSize: 10,
		marginRight: 10, 
		textAlign: 'right', 
		color: '#FFFFFF'
	},
	textTitle: {
		fontSize: 15, 
		fontWeight: 'bold',
		paddingRight: 30,
		width: '100%',
		color: 'white', 
		marginLeft: 15
	},
	textBottom: {
		fontSize: 10,
		color: '#FFFBFB', 
		marginLeft: 15
	},
	textDescription: {
		fontSize: 10,
		color: '#FFFFFF', 
		marginLeft: 15,
		paddingRight: 30,
		width: '100%'
	}
})
