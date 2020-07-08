import  React, {Component} from 'react'
import {View, Image, Text, TouchableHighlight, SafeAreaView,
        TouchableOpacity, TouchableWithoutFeedback, Keyboard,
        KeyboardAvoidingView, ScrollView} from 'react-native'
import Styles from '../common/styles'
import * as Svg from 'react-native-svg'

export default class MyBooking extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        const logoIcon = require('../utils/images/travelwth-02.png')
        const menuIcon = require('../utils/images/more.png')
        return (
            <View style = {Styles.container}>
                <View style = {Styles.header}>
                    <Image source = {logoIcon} style = {{width: 100, height : 40, alignSelf: 'center'}} >
                    </Image>
                    <Image source = {menuIcon}  style = {{width: 30, height : 10, left: 110, marginTop: 10, alignSelf: 'center'}}>
                    </Image>
                </View>

                <View style = {Styles.content}> 

                </View> 
            </View>
        )
    }
}