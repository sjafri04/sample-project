import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import ContactSection from './contactsection';


export default App = () => {
  return (
      <View style={styles.container}>
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
    </View>
   );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#819EE4",
   padding: 15,
   flexDirection: 'column',
   paddingTop: 30
 },

 newTop:{
    flexDirection: 'row',
    borderRadius: 20,
    height: 110,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 5
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
