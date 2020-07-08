import  React, {Component} from 'react'
import {View, Image, Text, TouchableHighlight, SafeAreaView,
        TouchableOpacity, TouchableWithoutFeedback, Keyboard,
        KeyboardAvoidingView, ScrollView, Dimensions, FlatList} from 'react-native'
import Styles from '../common/styles'
import * as Svg from 'react-native-svg'
import COLOR from '../utils/definitions'
import { color } from 'react-native-reanimated'
import MenuBar from './MenuBar' 


const {width, height} = Dimensions.get('window')
const logoIcon = require('../utils/images/travelwth-02.png')
const menuIcon = require('../utils/images/more.png')
const userIcon = require('../utils/images/Account.png')
const flightIcon = require('../utils/images/airplane.png')
const hotelIcon = require('../utils/images/hotel.png')
const experienceIcon = require('../utils/images/experience.png')
const airportTransferIcon = require('../utils/images/airport-tranfer.png')
const carRentalIcon = require('../utils/images/car-rental.png')
const jrPassIcon = require('../utils/images/train.png')
const villasAndApartmentsIcon = require('../utils/images/villaAndApartment.png')
const priceAlertsIcon         = require('../utils/images/alert.png')
const lastminuteHotelIcon     = require('../utils/images/clockAndhotel.png')
// const hotelIcon = require('../utils/images/hotel.png')

//
const Card = () => {
    return (
        <View style = {{height: height - 450, marginTop: -20,
            marginLeft: 10, marginRight: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5}}>
        </View>
    )
}
export const FlatListItem = ({item}) => {
    console.log(`Id: ${item.id} + title: ${item.title}`)
    return(
        item.id != 0 ? <View style = {{marginRight: 10, width : 240, height: 150 , borderTopRightRadius: 10, borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'red',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5}}>
                {/* <View>

                </View> */}
                <Text style = {{fontSize: 15, justifyContent : 'center', alignItems: 'center'}}>
                    {item.title}
                </Text>
        </View>
        : <View View style = {{width : 150, height: 150, borderTopRightRadius: 10, borderTopLeftRadius: 10, marginRight: 10,
            borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'red',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5}}>
        </View>
    )
}
const FlatListData = [
    {
        id: 0,
        title: 'First Item',
    },
    {
        id: 1,
        title: 'Second Item',
    },
    {
        id: 2,
        title: 'Third Item',
    }
]

export default class Home extends Component {
    constructor(props) {
        super (props)
        this.state = {
            isShowMenuBar:false
        }
        // this.isShowMenuBar = false
    }
    componentDidUpdate () {
        console.log("this sate"+ this.state.isShowMenuBar)
    }
    render() {
        return (
            <SafeAreaView style = {Styles.container}>
                <View style = {Styles.header}>
                    <Image source = {logoIcon} style = {{width: 100, height : 40, alignSelf: 'center'}} >
                    </Image>
                    <Image source = {menuIcon}  style = {{width: 20, height : 10, left: 110, marginTop: 10, alignSelf: 'center'}}>
                    </Image>
                </View>
              
                <View style = {Styles.content}> 
                <ScrollView showsVerticalScrollIndicator = {false} 
                onScroll = {(event) => {
                    console.log("event.nativeEvent.contentOffset.y" + event.nativeEvent.contentOffset.y)
                    if (event.nativeEvent.contentOffset.y > 375) {
                        this.setState ({
                            isShowMenuBar: true
                        })
                    }
                    else {
                        this.setState ({
                            isShowMenuBar: false
                        })
                    }
                }}
              >
                    {/* SubHeader login or register */}
                    <View style = {Styles.homeSubHeader}>
                        {/* Image */}
                        <View style = {{width: 30, height: 30, borderRadius: 15
                            , backgroundColor: 'gray', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                            <Image source = {userIcon} style = {{width: 15, height: 15, tintColor: 'white', resizeMode: 'contain',
                               }}>
                            </Image>
                        </View>
                        {/* Login text */}
                        <View style = {{flexDirection: 'column', justifyContent: 'flex-start'
                        , alignContent: 'space-between', marginLeft: 10}}>
                            <Text style = {{fontSize: 15, fontWeight: 'bold', color: 'white'}} >
                                Log In or Register
                            </Text>
                            <Text style = {{fontSize: 12, color: 'white'}}>
                                Enjoy your Traveloka member benefits!
                            </Text>
                        </View>
                    </View>
                    {/* Content */}
                    <View style = {{height: height - 450, marginTop: -20,
                    marginLeft: 10, marginRight: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'white',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5}}>
                        {/* General application */}
                        <View style = {{flexDirection: 'column', flex: 1}}>
                            <View style = {{flexDirection: 'row', flex: 1, borderBottomWidth: 2,
                                borderBottomColor : COLOR.FADE_WHITE}}>
                                {/* Flight application */}
                                <View style = {{borderRightWidth: 2, flex: 1,
                                            borderRightColor: COLOR.FADE_WHITE, justifyContent: 'center',
                                            alignItems: 'center'}}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.LIGHT_HEAVY_SKY
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {flightIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            Flights
                                      </Text>
                                </View >
                                {/* Hotels application */}
                                <View style = {{flex: 1 , justifyContent: 'center',
                                            alignItems: 'center'}}>
                                        <View style = {{width : 50 , height : 50, backgroundColor: COLOR.BLUE
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {hotelIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            Hotels
                                      </Text>                
                                </View>
                            </View>
                            {/* Applications in Row 2 */}
                            <View style = {{flexDirection: 'row', flex: 1,  borderBottomWidth: 2
                              , borderBottomColor : COLOR.FADE_WHITE}}>
                                <View style = {{ flex: 1, borderRightWidth: 2
                                , borderRightColor: COLOR.FADE_WHITE, justifyContent: 'center', alignItems: 'center'}}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.PURPLE
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        {/* <Image source = {hotelIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image> */}
                                        <Text style = {{fontSize : 10, color: 'white'}}>
                                            {"F & H"}
                                      </Text> 
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            Flight + Hotel
                                      </Text>  
                                </View>
                                <View style = {{ flex: 1, borderRightWidth: 2
                                , borderRightColor: COLOR.FADE_WHITE, justifyContent: 'center',
                                alignItems: 'center'}}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.PINK
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {experienceIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            Xperience
                                      </Text>  
                                </View>
                                <View style = {{flex: 1, justifyContent: 'center',
                                            alignItems: 'center'
                                }}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.LIGHT_SKY
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {airportTransferIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            Airport Transfer
                                      </Text>  
                                </View>
                            </View>
                            {/* Applications in Row 3 */}
                            <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style = {{ flex: 1, borderRightWidth: 2
                                , borderRightColor: COLOR.FADE_WHITE, justifyContent: 'center', alignItems: 'center'}}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.HEAVY_SKY
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {carRentalIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                      
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            Car Rental
                                     </Text>  
                                </View>
                                <View style = {{ flex: 1, borderRightWidth: 2
                                , borderRightColor: COLOR.FADE_WHITE, justifyContent: 'center',
                                alignItems: 'center'}}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.ORANGE
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {jrPassIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            JR Pass
                                      </Text>  
                                </View>
                                <View style = {{flex: 1, justifyContent: 'center',
                                            alignItems: 'center'
                                }}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.BLUE
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {villasAndApartmentsIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            {"Villas & Apartments"}
                                      </Text>  
                                </View>
                            </View>
                        </View>
                    </View>
                     {/* Alert application */}
                     <View ref = "alert" style = {{height: height - 450 - 140, marginTop: 15,
                        marginLeft: 10, marginRight: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'white',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5}}
                        >
                     <View style = {{flexDirection: 'row', flex: 1}}>
                            <View style = {{ flex: 1, borderRightWidth: 2
                                , borderRightColor: COLOR.FADE_WHITE, justifyContent: 'center', alignItems: 'center'}}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.LIGHT_SKY
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {priceAlertsIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                      
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            Price Alerts
                                     </Text>  
                                </View>
                                <View style = {{ flex: 1, borderRightWidth: 2
                                , borderRightColor: COLOR.FADE_WHITE, justifyContent: 'center',
                                alignItems: 'center'}}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.YELLOW
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                       <Text style = {{fontSize : 10, color: 'white'}}>
                                            {"M + P"}
                                      </Text> 
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            My Points
                                      </Text>  
                                </View>
                                <View style = {{flex: 1, justifyContent: 'center',
                                            alignItems: 'center'
                                }}>
                                     <View style = {{width : 50 , height : 50, backgroundColor: COLOR.PINK
                                        , borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
                                        <Image source = {lastminuteHotelIcon} style = {{width: 30, height: 30
                                                , tintColor: 'white'
                                                , resizeMode: 'contain'
                                            }}>
                                        </Image>
                                     </View>
                                     <Text style = {{fontSize : 10}}>
                                            {"Last-minute Hotels"}
                                      </Text>  
                                </View>
                            </View>                
                     </View>
                      {/* Program promos */}
                     <View ref = "parent" style = {{height: height - 450, marginTop: 15,
                        marginLeft: 10
                        }}>
                        {/* Header */}
                        <View style = {{flex: 1.5, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold',
                                 justifyContent: 'flex-start', color: 'black'}}>
                                Ongoing Promos
                            </Text>
                            <Text style = {{fontSize: 18, fontWeight: 'bold',
                                  color:  COLOR.HEAVY_SKY, justifyContent: 'flex-start', marginLeft: 185}}>
                                {">"}
                            </Text>
                        </View>
                        {/* Content */}
                        <View style = {{flex: 5}}>
                            <FlatList
                            showsHorizontalScrollIndicator = {false}
                            horizontal = {true}
                            data = {FlatListData}
                            renderItem = {({item, index}) =>  <FlatListItem item = {item}>
                            </FlatListItem>}
                            keyExtractor = {item => item.id}
                            >
                            </FlatList>
                        </View>
                    </View>
                     {/* Important notice */}
                     <View ref = "parent" style = {{height: height - 450,
                        marginLeft: 10
                        }}>
                        {/* Header */}
                        <View style = {{flex: 1.5, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold',
                                 justifyContent: 'flex-start', color: 'black'}}>
                                Important Notice
                            </Text>
                        </View>
                        {/* Content */}
                        <View style = {{flex: 5}}>
                            <FlatList
                            showsHorizontalScrollIndicator = {false}
                            horizontal = {true}
                            data = {FlatListData}
                            renderItem = {({item, index}) =>  <FlatListItem item = {item}>
                            </FlatListItem>}
                            keyExtractor = {item => item.id}
                            >
                            </FlatList>
                        </View>
                    </View>
                     {/* The latest From travelTH  */}
                     <View style = {{height: height - 450,
                        marginLeft: 10
                        }}>
                        {/* Header */}
                        <View style = {{flex: 1.5, flexDirection: 'column', alignItems: 'flex-start'}}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold',
                                 justifyContent: 'flex-start', color: 'black'}}>
                                The latest from Traveloka
                            </Text>
                            <Text style = {{fontSize: 14,
                                  color: 'gray', justifyContent: 'flex-start'}}>
                                      Stay informed of the latest updates
                            </Text>
                        </View>
                        {/* Content */}
                        <View style = {{flex: 5}}>
                            <FlatList
                            showsHorizontalScrollIndicator = {false}
                            horizontal = {true}
                            data = {FlatListData}
                            renderItem = {({item, index}) =>  <FlatListItem item = {item}>
                            </FlatListItem>}
                            keyExtractor = {item => item.id}
                            >
                            </FlatList>
                        </View>
                    </View>
                    </ScrollView>
                </View> 
           
                {/* 
                    Menu Bar
                */}
                {this.state.isShowMenuBar ? <MenuBar style = {Styles.menuBarStyleDown}/>: 
                <MenuBar style = {Styles.menuBarStyleUp}/>}
            </SafeAreaView>
        )
    }
}