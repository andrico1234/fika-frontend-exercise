import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Heading} from '../../components/heading';
import {useGetMovies} from '../../hooks/useGetMovies';
import {Layout} from '../../layouts/layout';
import {MoviesList} from './movies-list';

export function MoviesScreen() {
  const {isLoading, data, isError} = useGetMovies();

  if (isLoading) {
    return (
      <Layout>
        <ActivityIndicator />
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <Text>There was an error retrieving your movies</Text>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading text="Movies" />
      <MoviesList movies={data} />
    </Layout>
  );
}
