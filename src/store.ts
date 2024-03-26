import { create } from "zustand";

// I have worked with redux (thunk/sage/toolkit), mobx and something called easy-peasy yet in this project I wanted to add a challenge and implement the best global state manager out there: zustand that is actually a hook and as you can see no provider wrapper is necessary
// I am using zustand only as a global state manager without the fetching of the data (no async calls used)

// types
type MovieStore = {
  // states
  movie: any;
  movies: Array<any>;
  // setters
  setMovie: (id: string) => void;
  setMovies: (movies: Array<any>) => void;
};

// stores
export const useMoviestore = create<MovieStore>((set) => ({
  movie: {},
  movies: [],
  setMovie: (id) => {
    set((state) => ({ movie: state.movies.find((m) => m["#IMDB_ID"] === id) }));
  },
  setMovies: (movies) => {
    set({ movies });
  },
}));
