import { useMoviestore } from "../../src/store";
import api from "../axios";

export const fetch10Movies = async () => {
  try {
    const marvelURL = "/?q='marvel'";
    const DCURL = "/?q='dc'";
    const [arr1, arr2] = await Promise.all([
      api.get(marvelURL),
      api.get(DCURL),
    ]);
    let response;
    if (arr1?.status === 200 && arr2?.status === 200) {
      response = arr1.data.description
        .slice(0, 5)
        .concat(arr2.data.description.slice(0, 5));
      useMoviestore.setState({ movie: response[0] });
      useMoviestore.setState({ movies: response });
      return response;
    }
  } catch (err: any) {
    throw new Error(err);
  }
};

export const fetchMovie = async (id: string) => {
  try {
    // here I could have used the id from state manager
    const url = `/?tt=${id}`;
    const response = await api.get(url);
    if (response.status === 200) {
      useMoviestore.setState({ movie: response.data.fake });
      return response.data.fake;
    }
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};
