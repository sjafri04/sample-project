import React, {useState} from 'react';
import { StyleSheet, Text, View, SectionList, Image, FlatList } from 'react-native';
import ContactSection from './contactsection';
import ContactCard from './ContactCard';

const contactData = [
	{
		name: "Shan Jafri",
		LastContacted: "Two days ago",
	},

	{
		name: "Mohib Jafri",
		LastContacted: "5 months ago",
	},

	{
		name: "Mohammed Jafri",
		LastContacted: "One minute ago",
	},
]

export default App = () => {
	const [contacts, setContacts] = useState([
			{name: "Shan Jafri", LastContacted: "Two days ago", key: '1'},
			{name: "Mohib Jafri", LastContacted: "5 months ago", key: '2'},
			{name: "Mohammed Jafri", LastContacted: "One minute ago", key: '3'},

	]);
  return (
    <View style={styles.container}>

	<ContactCard/>
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

});
