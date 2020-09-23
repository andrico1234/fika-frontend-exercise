import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  onPress: () => void;
  text: string;
}

export function Button(props: Props) {
  const {onPress, text} = props;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#257A53' : '#3ABE82',
        },
        styles.button,
      ]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
