import { types } from "../types/types";

const initialState ={
  hmovie: [],
  popular: [],
  npopular: [],
  search : null
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.movieLoad:
      return {
        ...state,
        hmovie: action.payload.movielist,
      };
    case types.moviePopular:
      return {
        ...state,
        popular: action.payload.moviePopular,
      };
    case types.movieNotPopular:
      return {
        ...state,
        npopular: action.payload.movieNotPopular,
      };


    case types.movieSearch:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
