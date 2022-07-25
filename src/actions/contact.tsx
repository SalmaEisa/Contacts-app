import {ADD_CONTACT} from '../constants';
import {Contact} from '../reducers/contactReducer';

export function addContact(newContact: Contact) {
  return {
    type: ADD_CONTACT,
    payload: newContact,
  };
}