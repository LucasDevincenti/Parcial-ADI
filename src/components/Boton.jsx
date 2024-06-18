import React from 'react';
import { Button, Alert } from 'react-native';

const Boton = () => {
  const handlePress = () => {
    // Aquí puedes realizar acciones antes de mostrar la alerta, si es necesario.
    Alert.alert('Éxito', 'Se guardó correctamente');
  };

  return (
    <Button title="Guardar" onPress={handlePress} />
  );
};

export default Boton;