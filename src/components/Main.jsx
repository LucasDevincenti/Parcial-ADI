import React from 'react';
import Constants from 'expo-constants'
import {ScrollView, SafeAreaView, Text, Alert, Button, StyleSheet} from 'react-native';
import Nav from '../../src/components/Nav.jsx'
import Texto from '../../src/components/Texto.jsx'
import Boton from '../../src/components/Boton.jsx'
const Main = () => {
    return(
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <Nav />
          <Text style={{padding:2, fontWeight:'bold'}}>Nombre</Text>
          <Texto text="'Nombre'"/>
          <Text style={{padding:2, fontWeight:'bold'}}>Apellido</Text>
          <Texto text="'Apellido'"/>
          <Text style={{padding:2, fontWeight:'bold'}}>Email</Text>
          <Texto text="'Email'"/>
          <Text style={{padding:2, fontWeight:'bold'}}>¿Cuál es el problema del celular?</Text>
          <Texto text="'Error'"/>
          <Boton />
          </ScrollView>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
},
})

export default Main;

