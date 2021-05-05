import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Button,TouchableOpacity,Image ,navigation} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Home extends React.Component {
  
   render() {
      return (
          
        <ScrollView>
          <View style = {styles.header}>
          <Image source = {require('F:/react-native/AwesomeProject/assets/1.jpg')}
            style = {{ width: 500, height: 200 }} />
         </View> 
         
         <View style = {styles.container}>
           <View style = {styles.home}>
               <View style ={styles.inner}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Personal-Detail')}> 
               <FontAwesome5 name={'user'} size={100} color="#8e8e8e"/>
                   <Text>PROFILE</Text>
                    </TouchableOpacity> 
               </View>
           </View>   

           <View style = {styles.home}>
               <View style ={styles.inner}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Companies')}>
               <FontAwesome5 name={'comments'} size={100} color="#8e8e8e"/>
                   <Text>COMPANIES</Text>
                   </TouchableOpacity> 
               </View>
           </View>
           <View style = {styles.home}>
               <View style ={styles.inner}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('myy')}>
               <FontAwesome5 name={'servicestack'} size={100} color="#8e8e8e"/>
                   <Text>SERVICES</Text>
                   </TouchableOpacity> 
               </View>
           </View>
           <View style = {styles.home}>
               <View style ={styles.inner}>
               <FontAwesome5 name={'shopping-bag'} size={100} color="#8e8e8e"/>
                   <Text>SHOP</Text>
               </View>
           </View>
           <View style = {styles.home}>
               <View style ={styles.inner}>
               <FontAwesome5 name={'superpowers'} size={100} color="#8e8e8e"/>
                   <Text>SUPPORT</Text>
               </View>
           </View>
           <View style = {styles.home}>
               <View style ={styles.inner}>
               <FontAwesome5 name={'local-post-office'} size={100} color="#8e8e8e"/>
                   <Text>POST</Text>
               </View>
           </View>
           <View style = {styles.home}>
               <View style ={styles.inner}>
               <FontAwesome5 name={'notification'} size={100} color="#8e8e8e"/>
                   <Text>NOTIFICATION</Text>
               </View>
           </View>
           <View style = {styles.home}>
               <View style ={styles.inner}>
               <FontAwesome5 name={'upload'} size={100} color="#8e8e8e"/>
                   <Text>ID UPLOAD</Text>
               </View>
           </View>
         </View>
         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'85%',
      padding:5,
      flexDirection:'row',
      flexWrap:'wrap'
   },
   home:{
       width:'50%',
       height:'30%',
       padding:5
       //backgroundColor: '#00BCD4'
   },
   inner:{
       flex:1,
       backgroundColor:'#eee',
       alignItems:'center',
       justifyContent:'center'
       
   },
   header: {
    width:'100%',
    height:'30%',
   // padding:4,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#eee'
 },
});