import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Constants from "expo-constants";
const Drop = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const data = require('../../src/data/Data.json');

  useEffect(() => {
    const formattedOptions = data.map(option => ({
      label: option.marca,
      value: option.marca
    }));
    setItems(formattedOptions);
  }, []);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const selectItem = (item) => {
    setValue(item.value);
    setOpen(false);
  };

  return (
    <View style={{ zIndex: 999, position: 'relative',  marginTop:10 }}>
      <TouchableOpacity onPress={toggleDropdown} style={{ backgroundColor: 'rgba(100, 42, 115, 0.608)', padding: 10, borderRadius: 8 }}>
        <Text>{value ? value : "Selecciona el Marca"}</Text>
      </TouchableOpacity>
      {open && (
        <View style={{ position: 'relative', backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderRadius: 5, zIndex: 9999 }}>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectItem(item)} style={{ padding: 10 }}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.value.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default Drop;