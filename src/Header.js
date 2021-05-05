import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Header extends React.Component {
   render() {
      return (
         <View style = {styles.header}>
          <Image source = {require('F:/react-native/AwesomeProject/assets/1.jpg')}
   style = {{ width: 500, height: 200 }} />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   header: {
      width:'100%',
      height:'30%',
     // padding:4,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#eee'
   },
});