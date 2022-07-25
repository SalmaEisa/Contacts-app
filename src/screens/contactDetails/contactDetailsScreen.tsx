import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';

const ContactDetailsScreen = ({route, navigation}) => {
  const {contact} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>
      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Name: {contact?.name}</Text>
        <Text style={styles.text}>Email address: {contact?.email}</Text>
        <Text style={styles.text}>
          phone number: {contact.phoneNumber ? contact.phoneNumber : '-'}
        </Text>
      </View>
    </View>
  );
};

export default ContactDetailsScreen;
