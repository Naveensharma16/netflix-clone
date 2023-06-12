import axios from "axios";

// below function is used to fetch the yotube id of the movie
export const getBannerMovies = async () => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/discover/movie?api_key=f027fe75601755f162912a55c1ba85ad&language=en-US&sort_by=popularity.desc`
  );

  // return data.results;

  const movies = [];

  // here we filter 8 movies from the movies data returned by api

  for (let index = 0; index < 12; index++) {
    // below condition will check if any movie poster is not available we will ignore it and continue the loop
    if (data.results[index].backdrop_path == null) {
      continue;
    }

    // fetching video id for the movie
    // const videoid = await axios(
    //   `https://api.themoviedb.org/3/movie/${data.results[index].id}/videos?api_key=f027fe75601755f162912a55c1ba85ad&language=en-US`
    // );

    // combing all the result
    movies.push({
      id: data.results[index].id,
      img: `https://image.tmdb.org/t/p/w1280/${data.results[index].backdrop_path}`,
      name: data.results[index].original_title,
      generas: data.results[index].genre_ids,
      // videoid: videoid?.data?.results[0].key,
    });
  }

  return movies;
};
