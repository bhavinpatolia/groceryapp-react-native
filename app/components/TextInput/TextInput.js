import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const InputGray = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
};