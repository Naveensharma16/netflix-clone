import axios from "axios";

export const getMysteryMovies = async (page = 1) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/discover/movie?api_key=f027fe75601755f162912a55c1ba85ad&with_genres=9648&page=${page}`
  );

  const movies = [];
  for (let index = 0; index < 20; index++) {
    // below condition will check if any movie poster is not available we will ignore it and continue the loop
    if (data.results[index].backdrop_path == null) {
      continue;
    }
    movies.push({
      img: `https://image.tmdb.org/t/p/w780/${data.results[index].backdrop_path}`,
      name: data.results[index].title,
      id: data.results[index].id,
      generas: data.results[index].genre_ids,
    });
  }
  return movies;
};
