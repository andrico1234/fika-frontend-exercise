import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EnrichedMovie} from '../../models';

interface Props {
  movie: EnrichedMovie;
}

export function MovieItem(props: Props) {
  const {movie} = props;
  const {title, vote_average, genres} = movie;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contentWrapper}>
        <View style={styles.genres}>
          {genres.map((genre) => (
            <Text style={styles.genre} key={genre}>
              {genre}
            </Text>
          ))}
        </View>
        <Text>{vote_average}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  title: {
    fontSize: 22,
  },
  genres: {
    flexDirection: 'row',
  },
  genre: {
    paddingRight: 4,
  },
  contentWrapper: {
    flexDirection: 'row',
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
});
