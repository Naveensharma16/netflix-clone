import axios from "axios";

// function used to fetch the data related to single movie it is used in popup only right now
export const singleMovies = async (movieid) => {
  const response =
    await axios(`https://api.themoviedb.org/3/movie/${movieid}?api_key=f027fe75601755f162912a55c1ba85ad&language=en-US
     `);
  return response.data;
};
