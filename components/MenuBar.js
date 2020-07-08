import  React, {Component} from 'react' 
import {View, Image, Text, Dimensionsm} from 'react-native'
import COLOR from '../utils/definitions'


export default function  MenuBar (props) {
    const {style} = props
    const flightIcon = require('../utils/images/airplane.png')
    const hotelIcon = require('../utils/images/hotel.png')
    const airportTransferIcon = require('../utils/images/airport-tranfer.png')
    const carRentalIcon = require('../utils/images/car-rental.png')
    const jrPassIcon = require('../utils/images/train.png')
    const villasAndApartmentsIcon = require('../utils/images/villaAndApartment.png')
    return (
        // This is the Frame of menuBar Row dropshadow
        <View style = {[style, {flexDirection: 'row', alignContent: 'space-between'}]}>
            <View style = {{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style = {{width : 30, height: 30, tintColor: COLOR.LIGHT_HEAVY_SKY}}  source = {flightIcon} >
                </Image>
            </View>
            {/*  
               Vilas And Hotel*/}
             <View style = {{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style = {{width : 30, height: 30, tintColor: COLOR.BLUE}}  source = {hotelIcon}>
                </Image>
            </View>
            {/* Flight and hotel */}
            <View style = {{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source = {airportTransferIcon}  style = {{width : 30, height: 30, tintColor: COLOR.HEAVY_SKY}}  >
                </Image>
            </View>
            {/* experience */}
            <View style = {{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style = {{width : 30, height: 30 , tintColor: COLOR.ORANGE}}  source = {carRentalIcon}>
                </Image>
            </View>
             {/* Flight and car */}
             <View style = {{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style = {{width : 30, height: 30 , tintColor: COLOR.PURPLE}}  source = {jrPassIcon}>
                </Image>
            </View>
             {/*car rental */}
             <View style = {{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style = {{width : 30, height: 30 , tintColor: COLOR.LIGHT_SKY}}  source = {villasAndApartmentsIcon}>
                </Image>
            </View>
        </View>
    )
}