import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const Texto = ({Text}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSave = () => {
    // Aquí puedes realizar acciones con el valor ingresado, como guardarlos en un estado o enviarlos a un servidor
    console.log('Valor ingresado:', inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder= {Text}
        onChangeText={handleInputChange}
        value={inputValue}
      />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
},
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#5458',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Texto;
