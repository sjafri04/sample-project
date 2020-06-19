import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import ContactSection from './contactsection';
import ContactSearch from './contactsearch';

const contactData = [
	{
		name: "Shan Jafri",
		LastConacted: "Two days ago",
	},

	{
		name: "Mohib Jafri",
		LastConacted: "5 months ago",
	},

	{
		name: "Mohammed Jafri",
		LastConacted: "One minute ago",
	},
]

export default App = () => {
  return (
      <ContactSearch/>
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
