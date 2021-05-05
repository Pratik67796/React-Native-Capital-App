import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';

export default class Company_detail extends React.Component {
   render() {
      return (
          <View style={styles.footer}>
            <View>
                <Text style={styles.text}>22-23 Wendover Drive</Text>
                <Text style={styles.text}>Bedford,MK44 5FT</Text>
                <Text style={styles.innerText}>Active</Text>
            </View>
            <View>
              <Text>___________________________________________________</Text>
            </View>
            
            <View>
              <Text style={styles.appText}>Services </Text>
            </View>
            {/* <View>
            <Text>
                Hi~{"\n"}
                this is a test message.
                </Text>
            </View> */}
            <View>
             
              <Text style={styles.appText}> <FontAwesome5 name={'user'} size={25} color="#0DF31D"/>London Office Address</Text>
            </View>

            <View>
              <Text style={styles.appText}> <FontAwesome5 name={'user'} size={25} color="#0DF31D"/>Call Answring</Text>
            </View>

            <View>
              <Text style={styles.appText}> <FontAwesome5 name={'user'} size={25} color="#0DF31D"/>Meeting Rooms</Text>
            </View>

            <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Company Address</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.appButtonContainer2}>
                <Text style={styles.appButtonText}>Mail Forwading</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.appButtonContainer3}>
                <Text style={styles.appButtonText}>Phone Answering</Text>
            </TouchableOpacity>

    </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387',
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
    title: {
        color: '#05375a',
        fontSize: 15,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        color: 'grey',
        marginTop:5,
    },
    innerText: {
        fontSize: 18,
        color: 'green'
    },
    appText: {
        fontSize: 18,
        // color: "#fff",
        // fontWeight: "bold",
        // alignSelf: "center",
        // textTransform: "uppercase"
      },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#13CD20",
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:100
      },
      appButtonContainer2: {
        elevation: 8,
        backgroundColor: "#13CD20",
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:20
      },
      appButtonContainer3: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:20
      },

  });