import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import ContactSection from './contactsection';


export default App = () => {
  return (
      <View style={styles.container}>
            <View style={styles.top}>
                    <Image style={styles.picture1} source={require("./batman.jpg")} />
                    <Text style={styles.contact}>Shan Jafri</Text>
                    <Text>2 days ago </Text>
            </View>

            <View style={styles.newTop}>
                <View style={{flex: 1}}>
                    <Image style={styles.picture2} source={require("./bats.jpg")} />
                </View>

                <View style={{flex: 3, paddingLeft: 15}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.newContact}>Shan Jafri</Text>
                    </View>
                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <Text style={styles.newDate}>2 days ago </Text>
                    </View>
                </View>

            </View>
            <View style={styles.top}>
                    <Image style={styles.picture1} source={require("./batman.jpg")} />
                    <Text style={styles.contact}> Mohib Jafri                            5 months ago</Text>
            </View>
            <View style={styles.top}>
                    <Image style={styles.picture1} source={require("./batman.jpg")} />
                    <Text style={styles.contact}> Mohammed Jafri                         1 minute ago </Text>
            </View>


    </View>
   );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#819EE4",
   padding: 30,
   justifyContent: "space-between",
   flexDirection: 'column'
 },

 newTop:{
    flexDirection: 'row',
    borderRadius: 25,
    height: 110,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
 },
 top: {
   backgroundColor: "white",
   borderWidth: 0,
   borderRadius: 20,
   alignItems: 'flex-start',
   flexDirection:"row",
 },
 contact: {
     flex: 2,
     textAlign: "center",
     fontSize: 20,
     alignSelf: 'center',
     paddingTop: 0

 },
 newContact: {
     fontSize: 30,
     alignSelf: 'flex-start',

 },

 newDate:{
     alignSelf: 'center',
     justifyContent: 'flex-start'

 },
 picture1:{
     flex: 1,
     height: 90,
     borderRadius: 20,
     alignSelf:"center",
 },
 picture2:{
     flex: 1,
     height: 90,
     width: 90,
     borderRadius: 200,
     alignSelf:"center",
 },
 last:{
     flex: 1,
     alignSelf: "center",
	 flexWrap: "wrap"

 }
});
