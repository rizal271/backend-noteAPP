import React, { Component } from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import DrawerHome from '../Component/Drawer'

import Home from '../Screen/Home'
import AddNote from '../Screen/AddNote'
import EditNote from '../Screen/EditNote'


// const AppStack = createStackNavigator({
  


const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    AddNote: AddNote,
    EditNote: EditNote,
  },
  {
    headerMode: "none"
  }
);

const DrawerNoteAPP = createDrawerNavigator(
  {
    HomeNavigator
  },
  {
    contentComponent: DrawerHome
  }
);

export default createAppContainer(createSwitchNavigator(
    {
     
      DrawerNoteAPP,
     
      },
      {
        initialRouteName: 'DrawerNoteAPP',
        headerMode:'none'
      }
      
));