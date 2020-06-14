import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default ContactSection = () => {
    return(
    <View>
        <Text> bru </Text>
        <SectionList
            sections={[
                {title: 'A', data: ['Abbas', 'Adam', 'Aidan']},
                {title: 'D', data: ['Dad', 'Danish', 'Dylan']},
                {title: 'K', data: ['Karen', 'Kenny', 'Kevin']},
            ]}
            renderItem={({item}) => <Text style= {styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
        />
    </View>
    )
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
