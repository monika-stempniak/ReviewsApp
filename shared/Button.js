import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const FlatButton = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{...styles.button, ...(disabled && {...styles.disabledButton})}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#018b9e',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FlatButton;
