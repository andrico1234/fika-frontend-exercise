# FikaSearch Exercise

The objective of this exercise is to fork this repository and create a `react-native` app called 'FikaSearch'. This app will comprise of a listing page of films and the names of their genres.

You have an hour to complete this. We don't expect you to complete the exercise but we do expect you to have an understandable structure, clean code, and to be able to describe your next steps.

## Technical details

### API
You will need to use the following URLs to fetch the films and genres from `the movie db` API:

movies - [https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1](https://developers.themoviedb.org/3/movies/get-now-playing)

genres - [https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US](https://developers.themoviedb.org/3/genres/get-movie-list)

#### Images

The API will provide part of the image url via the `poster_path` field of each film. It must be combined with the base image path `https://image.tmdb.org/t/p/w500/`

**Have fun!**

# Review

## What I completed

- Got the React Native Application running on an iOS simulator
- Implemented Navigation
- Retrieved data from the server-side
- Implemented the Fika Brand colours

## What I didn't complete

- Display the images as part of the poster_path.
- I would have just used the `<Image source={`${basePath}${movie.image_path}`} />`
- Improved layout
- Testing on Android Simulator and Real Device

## Things I would like to add

Given more time (or as part of a larger project) I would add/consider:

- Detox testing + React Native Testing Library tests
- Test on physical devices and different operating systems
- Implement infinite scrolling/search features for the application. This would be done fairly easily via the [React Query library](https://react-query.tanstack.com/docs/guides/infinite-queries)
- Personalised choices, via a questionnaire
- Implementing the Fika branding and tone of voice
- Collaborate closely with the product department to understand the problem we're solving
- Build a number of low-fidelity mockups to understand earlier on if we're acting against the business needs

## How I would've approached this if I was given more time