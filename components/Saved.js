import  React, {Component} from 'react'
import {View, Image, Text, TouchableHighlight, SafeAreaView,
        TouchableOpacity, TouchableWithoutFeedback, Keyboard,
        KeyboardAvoidingView, ScrollView} from 'react-native'
import Styles from '../common/styles'
import * as Svg from 'react-native-svg'

export default class Saved extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        const menuIcon = require('../utils/images/more.png')
        return (
            <View style = {Styles.container}>
                <View style = {Styles.header}>
                    <Text style = {Styles.headerText}>
                        Saved
                    </Text>
                    <Image source = {menuIcon}  style = {{width: 20, height : 10, left: 110, marginTop: 10, alignSelf: 'center'}}>
                    </Image>
                </View>
                <View style = {Styles.content}> 

                </View> 
            </View>
        )
    }
}