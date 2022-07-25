import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddContactScreen,
  ContactListScreen,
  ContactDetailsScreen,
} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="contactList" component={ContactListScreen} />
        <Stack.Screen name="addContact" component={AddContactScreen} />
        <Stack.Screen name="contactDetails" component={ContactDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
