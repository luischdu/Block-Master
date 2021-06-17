import { types } from "../types/types";
//main
export const movies = (movielist) => ({
  type: types.movieLoad,
  payload: {
    movielist,
  },
});

export const movieList = (list) => {
  return (dispatch) => {
    dispatch(movies(list));
  };
};

export const moviesPopular = (moviePopular) => ({
  type: types.moviePopular,
  payload: {
    moviePopular,
  },
});

export const movieListPopular = (list) => {
  return (dispatch) => {
    dispatch(moviesPopular(list));
  };
};
export const moviesNotPopular = (movieNotPopular) => ({
  type: types.movieNotPopular,
  payload: {
    movieNotPopular,
  },
});

export const movieListNotPopular = (list) => {
  return (dispatch) => {
    dispatch(moviesNotPopular(list));
  };
};

export const search = (search) => ({
  type: types.movieSearch,
  payload: {
    search,
  },
});

export const movieSearch = (search) => {
  return (dispatch) => {
    dispatch(search(search));
  };
};
