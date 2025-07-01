import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export const Input = (props: TextInputProps) => {
  return <TextInput style={styles.input} placeholderTextColor="#888" {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
});
