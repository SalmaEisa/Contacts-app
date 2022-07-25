import React, {useState} from 'react';
import {styles} from './styles';
import {Button, Text, View, TextInput} from 'react-native';
import {addContact} from '../../actions/contact';
import {useDispatch} from 'react-redux';

const ContactForm = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSubmit = () => {
    if (!name || !email) {
      alert('please complete required fields');
    } else {
      dispatch(addContact({name, email, phoneNumber}));
      setTimeout(() =>
        navigation.reset({index: 0, routes: [{name: 'contactList'}]}, 3000),
      );
    }
  };
  const Required = () => {
    return <Text style={styles.requiredField}>*</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>
        Name: <Required />
      </Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Full name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.inputText}>
        Email: <Required />
      </Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.inputText}>Number: </Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Mobile number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} color="#00008B" />
      </View>
    </View>
  );
};

const AddContactScreen = ({navigation}) => {
  return (
    <>
      <ContactForm navigation={navigation} />
    </>
  );
};

export default AddContactScreen;
