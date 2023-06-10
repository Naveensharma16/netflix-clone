import axios from "axios";

export const getUpcomingMovie = async (page = 1) => {
  const response = await axios(
    `https://api.themoviedb.org/3/discover/movie?api_key=f027fe75601755f162912a55c1ba85ad&with_genres=878&page=${page}`
  );
  return response.data.results;
};
