import React from 'react';
import { View, Text} from 'react-native';
import Constants from 'expo-constants';
import Img from './Img';
import Drop from '../../src/components/Drop.jsx'
import Drop2 from '../../src/components/Drop2.jsx'

const Nav = ({ brands }) => {

  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Img />
      <Text style={{ marginTop: Constants.statusBarHeight, flexGrow: 1,justifyContent: 'center',alignItems: 'center', fontWeight: 'bold' }}> 
      ¿Cual es tu celular? </Text>
      <Drop />
      <Drop2 />
    </View>
  );
};

export default Nav;
