import axios from "axios";

// function to fetch similar movies for modal popup
export const similarMovies = async (movieid) => {
  const response =
    await axios(`https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=f027fe75601755f162912a55c1ba85ad&language=en-US&page=1
     `);
  return response.data.results;
};
