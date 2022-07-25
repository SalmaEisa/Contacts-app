import {ADD_CONTACT} from '../constants';

export interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface contactList {
  contacts: Contact[];
}

const initialState: contactList = {
  contacts: [],
};

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};
export default contactReducer;
