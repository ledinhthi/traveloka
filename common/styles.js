import {StyleSheet, StatusBar, Dimensions} from 'react-native'
import COLOR from '../utils/definitions'
const {width, height} = Dimensions.get('window')
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 10,
        flexDirection:'row',
        backgroundColor: COLOR.BLUE_SKY,
        justifyContent: 'center',
        // alignItems: 'center',
        width: width,
        height: 60
    },
    homeSubHeader: {
        flexDirection:'row',
        backgroundColor: COLOR.BLUE_SKY,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: width,
        height: 80,
        paddingTop: 5,
        paddingLeft: 5
    },
    content: {
        flex: 1,
        height: height - 60,
        width: width
    },
    
    headerText: {
        color:  COLOR.WHITE,
        width: 100,
        fontSize : 15,
        textAlign: "center",
        marginTop: 20,
        fontWeight: "bold"
    },
    menuBarStyleDown: {
        width: width - 10,
        height: 50,
        position: 'absolute',
        top: 90,
        left: 0,
        right: 0,
        bottom: 0,
        marginLeft: 5, 
        marginRight: 5, 
        borderTopRightRadius: 15, borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    menuBarStyleUp: {
        width: width - 10,
        height: 50,
        position: 'absolute',
        top: -60,
        left: 0,
        right: 0,
        bottom: 0,
        marginLeft: 5, 
        marginRight: 5, 
        borderTopRightRadius: 15, borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})
export default Styles;