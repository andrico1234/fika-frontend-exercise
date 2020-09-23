import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {EnrichedMovie} from '../../models';
import {MovieItem} from './movie-item';

interface Props {
  movies: EnrichedMovie[];
}

export function MoviesList(props: Props) {
  const {movies} = props;

  return (
    <FlatList
      style={styles.list}
      data={movies}
      keyExtractor={({id}) => `${id}`}
      renderItem={({item}) => <MovieItem movie={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 80,
  },
});
