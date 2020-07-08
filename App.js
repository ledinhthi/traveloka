import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './components/Home'
import MyAccount  from './components/MyAccount'
import MyBooking  from './components/MyBooking'
import Saved     from './components/Saved'
import MyInbox   from './components/MyInbox'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

const Tab = createBottomTabNavigator();
const homeIcon = require('./utils/images/browser.png')
const savedIcon = require('./utils/images/bookmark2.png')
const myBookingIcon = require('./utils/images/Mybooking.png')
const myInboxIcon = require('./utils/images/mail.png')
const myAccountIcon = require('./utils/images/Account.png')

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {({route}) => ({
            tabBarIcon: (event) => {
              if (route.name === 'Home') {
                return (
                  <Image  source = {homeIcon} style = {{width: 25, height: 25, tintColor: event.color}}>
                  </Image>
                ) 
               }
               else if (route.name === 'Saved') {
                return (
                  <Image source = {savedIcon} style = {{width: 25, height: 25, tintColor: event.color}}>
                  </Image>
                ) 
               }
               else if (route.name === 'My Booking') {
                return (
                  <Image source = {myBookingIcon}  style = {{width: 25, height: 25,  tintColor: event.color}}>
                  </Image>
                ) 
               }
               else if (route.name === 'My Inbox') {
                return (
                  <Image  source = {myInboxIcon} style = {{width: 25, height: 25,  tintColor: event.color}}>
                  </Image>
                ) 
               }
               else if (route.name === 'My Account') {
                return (
                  <Image  source = {myAccountIcon} style = {{width: 25, height: 25,  tintColor: event.color}}>
                  </Image>
                ) 
               }
            },
           
        })}
        tabBarOptions = {
          {
            inactiveTintColor: 'gray',
            activeTintColor: 'blue',
            showLabel: true,
            labelPosition: 'below-icon',
          }
      }
      initialRouteName = 'Home'>
        <Tab.Screen name = "Home" component = {Home} 
      
         />
        <Tab.Screen name = "Saved" component = {Saved}
        />
        <Tab.Screen name = "My Booking" component = {MyBooking}
         />
        <Tab.Screen name = "My Inbox" component = {MyInbox}/>
        <Tab.Screen name = "My Account" component = {MyAccount}/>
      </Tab.Navigator>
      </NavigationContainer>
  );
}


