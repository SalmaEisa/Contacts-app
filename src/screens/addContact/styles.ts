import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    width: '100%',
    color: '#00008B',
    justifyContent: 'flex-start',
    fontSize: 20,
    paddingHorizontal: 20,
    margin: 10,
  },
  requiredField: {
    color: 'red',
  },
  inputBox: {
    width: '90%',
    height: 40,
    padding: 10,
    textAlign: 'left',
    borderWidth: 1,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#00008B',
    paddingHorizontal: 50,
    margin: 50,
    borderRadius: 10,
  },
});
