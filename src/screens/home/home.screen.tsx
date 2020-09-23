import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/button';
import {Heading} from '../../components/heading';
import {Layout} from '../../layouts/layout';

export function HomeScreen({navigation}: StackScreenProps<{}>) {
  return (
    <Layout>
      <Heading text="FikaSearch" />
      <Text style={styles.subheading}>
        Connect with your friends with our new Netflix party integration.
      </Text>
      <Image
        style={styles.image}
        source={require('../../assets/city-scene.png')}
      />
      <Text style={styles.text}>
        Host a movie, and your friends can join in with your unique FikaSearch
        link.
      </Text>
      <Text style={styles.text}>
        Begin by choosing from a list of available movies. Or pick a genre, and
        vote by committee.
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => {
            navigation.navigate('Movies');
          }}
          text="Movies"
        />
        <Button
          onPress={() => {
            navigation.navigate('Genres');
          }}
          text="Genres"
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 280,
    left: 0,
  },
  subheading: {
    color: 'black',
    fontSize: 24,
    padding: 16,
  },
  text: {
    fontSize: 18,
    padding: 16,
  },
  buttonWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
});
