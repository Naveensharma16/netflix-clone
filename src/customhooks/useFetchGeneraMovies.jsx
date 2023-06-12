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
import { getsifiMovies } from "../api/sifimovies";
import { getMysteryMovies } from "../api/mysterymovies";
import { getDocumentryMovies } from "../api/documentrymovies";
import { getRomanceMovies } from "../api/romancemovies";
import { getThirllerMovies } from "../api/thrillermovies";
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
      case "sifi": {
        const response = getsifiMovies(page);
        response.then((results) => {
          setMovies([...movies, ...results]);
        });
      }
      case "mystery": {
        const response = getMysteryMovies(page);
        response.then((results) => {
          setMovies([...movies, ...results]);
        });
      }
      case "documentry": {
        const response = getDocumentryMovies(page);
        response.then((results) => {
          setMovies([...movies, ...results]);
        });
      }
      case "romance": {
        const response = getRomanceMovies(page);
        response.then((results) => {
          setMovies([...movies, ...results]);
        });
      }
      case "thriller": {
        const response = getThirllerMovies(page);
        response.then((results) => {
          setMovies([...movies, ...results]);
        });
      }
    }
  }, [page]);

  return movies;
};
