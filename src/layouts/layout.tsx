import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  const {children} = props;

  return <View style={styles.layout}>{children}</View>;
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#F1F7E9',
  },
});
