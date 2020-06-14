import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import ContactSection from './contactsection';


export default App = () => {
  return (
    <View style={styles.container}>
        <ContactSection/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop:"50%"
    }

})
