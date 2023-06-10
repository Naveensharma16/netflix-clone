// custom hook used to

// function to get the animated movies
import { getAnimationMovies } from "../api/animationmovie";
// function to get the animated movies

// function to get the horror movies
import { getHorrorMovies } from "../api/horrormovies";
// function to get the horror movies

// function to get the history movies
import { getHistoryMovies } from "../api/historymovie";
// function to get the history movies

// function to get the recommended movies
import { getRecomendedMovie } from "../api/recomendusermovie";
// function to get the recommended movies

// function to get popular hollywoodmovies
import { getPopularMovies } from "../api/popularmovies";
import { useEffect, useState } from "react";
// function to get popular hollywoodmovies

export const useFetchGeneraMovies = (genera, page) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    switch (genera) {
      case "history":
        {
          const response = getHistoryMovies(page);
          response.then((results) => {
            setMovies([...movies, ...results]);
          });
        }
        break;
      case "recommended":
        {
          const response = getRecomendedMovie(page);
          response.then((results) => {
            setMovies([...movies, ...results]);
          });
        }
        break;
      case "animation":
        {
          const response = getAnimationMovies(page);
          response.then((results) => {
            setMovies([...movies, ...results]);
          });
        }
        break;
      case "horror":
        {
          const response = getHorrorMovies(page);
          response.then((results) => {
            setMovies([...movies, ...results]);
          });
        }
        break;
      case "popular":
        {
          const response = getPopularMovies(page);
          response.then((results) => {
            setMovies([...movies, ...results]);
          });
        }
        break;
    }
  }, [page]);

  return movies;
};
