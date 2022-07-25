import React from 'react';
import {styles} from './styles';
import {Button, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const ContactListScreen = ({navigation}) => {
  const contactsList = useSelector((state: any) => state.contact?.contacts);
  const AddNewContact = () => {
    navigation.navigate('addContact');
  };
  const handlePress = (item: any) => {
    navigation.navigate('contactDetails', {contact: item});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
        <Text style={styles.text}>Name: {item?.name}</Text>
        <Text style={styles.text}>Email address: {item?.email}</Text>
        <Text style={styles.text}>
          phone number: {item.phoneNumber ? item.phoneNumber : '-'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <FlatList
        data={contactsList}
        renderItem={renderItem}
        style={styles.list}
      />
      <View style={{paddingVertical: 20}}>
        <Button title="Add contact" onPress={AddNewContact} color="#00008B" />
      </View>
    </View>
  );
};

export default ContactListScreen;
