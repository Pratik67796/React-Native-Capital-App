import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import { Avatar } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import Color from '../common/Colors'
//import { getStatusBarHeight } from 'react-native-status-bar-height';
//var { width, height } = Dimensions.get('window');
//const REMAIN_HEIGHT = height - getStatusBarHeight() + 10;
 
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button,
    TouchableWithoutFeedback,
    navigation
   
} from 'react-native';



export default class Companies extends React.Component{
    _onPressButton() {
        alert('You tapped the button!')
      }
    render(){
  return (
   
    <View style={styles.footer}>
        <View>
            <Text>
                ______________________________________________________
            </Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}> 
                <Text style={styles.title}>My Company Name LTD</Text>
                <Text style={styles.text}>22-23 Wendover Drive</Text>
                <Text style={styles.text}>Bedford,MK44 5FT</Text>
            </TouchableOpacity> 
        </View>
        
        <View>
            <Text>
                ______________________________________________________
            </Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}> 
                <Text style={styles.title}>My Company Name LTD</Text>
                <Text style={styles.text}>22-23 Wendover Drive</Text>
                <Text style={styles.text}>Bedford,MK44 5FT</Text>
            </TouchableOpacity> 
        </View>
        
        <View>
            <Text>
                ______________________________________________________
            </Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}> 
                <Text style={styles.title}>My Company Name LTD</Text>
                <Text style={styles.text}>22-23 Wendover Drive</Text>
                <Text style={styles.text}>Bedford,MK44 5FT</Text>
            </TouchableOpacity> 
        </View>
       
        <View>
            <Text>
                ______________________________________________________
            </Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}> 
                <Text style={styles.title}>My Company Name LTD</Text>
                <Text style={styles.text}>22-23 Wendover Drive</Text>
                <Text style={styles.text}>Bedford,MK44 5FT</Text>
            </TouchableOpacity> 
        </View>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('myy')}>
            <View style={styles.Button}>
            <View >
                 <Button title='+ NEW COMPANY' onPress={this._onPressButton} color="#E91E63" />
                </View>
            </View>
         </TouchableOpacity>



    
    </View>
  );
}
}




//export default Company;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      paddingVertical: 50,
      paddingHorizontal: 30,
      marginTop:3,
  },
  logo: {
      width: height_logo,
      height: height_logo,
  },
  title: {
      color: '#05375a',
      fontSize: 15,
      fontWeight: 'bold',
  },
  text: {
      color: 'grey',
      marginTop:5,
  },
  Button: {
      borderRadius:250,
      paddingVertical:14,
      paddingHorizontal:10,
      backgroundColor:'#E91E63',
      marginTop: 50,
      //marginBottom:10
  },
  buttontext:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center',
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});