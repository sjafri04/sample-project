import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import ContactSection from './contactsection';


export default App = () => {
  return (
      <View style={styles.container}>
            <View style={styles.top}>
                    <Image style={styles.picture1} source={require("./batman.jpg")} />
                    <Text style={styles.contact}> Shan Jafri                              2 days ago </Text>
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
justifyContent: "space-between"
 },
 top: {
   flex: 0.15,
   backgroundColor: "white",
   borderWidth: 0,
   borderRadius: 20,
   alignItems: 'flex-start',
   flexWrap: "wrap",
   flexDirection:"row",


 },
 contact: {
     flex: 2,
     textAlign: "center",
     fontSize: 20,
     alignSelf: 'center',
     paddingTop: 0

 },
 picture1:{
     flex: 1,
     height: 90,
     width: 80,
     borderRadius: 20,
     paddingBottom: 1,
     paddingTop: 1,
     alignSelf:"flex-start",
 },
 last:{
     flex: 1,
     alignSelf: "center",
	 flexWrap: "wrap"

 }
});
