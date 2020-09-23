import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  text: string;
}

export function Heading(props: Props) {
  return <Text style={styles.heading}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    textAlign: 'center',
    padding: 16,
  },
});
