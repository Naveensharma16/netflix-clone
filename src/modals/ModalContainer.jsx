import React, { useContext, useEffect, useState } from "react";
import showmodal from "../contexts/showmodal";

import { similarMovies } from "../api/similarmovies";

import { movieVideoId } from "../api/movievideoid";

import plus from "../assets/addwatchlist.png";
import close from "../assets/close.png";
import like from "../assets/thumbsup.png";
import play from "../assets/play.png";

import YotubeVideo from "../components/YotubeVideo";
import { singleMovies } from "../api/singlemovie";
import { Link } from "react-router-dom";

const ModalContainer = () => {
  const [similarMoviesList, setSimilarMoviesList] = useState(null);
  const popupModal = useContext(showmodal);
  const [videoId, setVideoId] = useState(0);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    // below function is called to get the video id from api which is passed to the yotubeideo component
    movieVideoId(popupModal.movieid)
      .then((result) => {
        return result[0].key;
      })
      .then((result) => {
        setVideoId(result);
      });

    // below function is called to get the information of the movie we have opened
    singleMovies(popupModal.movieid).then((result) => {
      setMovieInfo({
        name: result.title,
        popularity: result.popularity,
        runtime: result.runtime,
        description: result.overview,
        genera: result.genres,
      });
    });

    // below function is used to fetch the similar movies for the current movid
    similarMovies(popupModal.movieid)
      .then((result) => {
        const movies = [];
        result.forEach((element) => {
          console.log();
          if (!(element.backdrop_path === null)) {
            movies.push({
              img: element.backdrop_path,
              popularity: element.popularity,
              title: element.title,
              description: element.overview,
              id: element.id,
            });
          }
        });
        return movies;
      })
      .then((result) => {
        setSimilarMoviesList(result);
      });

    return () => {
      setSimilarMoviesList(null);
    };
  }, []);

  return (
    <>
      <div className="pop-modal-box">
        <div className="background-shadow"></div>

        <div className="movie-data-box">
          <div className="video">
            <YotubeVideo url={`https://www.youtube.com/watch?v=${videoId}`} />
            <div className="background-style"></div>
            <div className="trailer-movie-information">
              <h2>{movieInfo.name}</h2>
              <div className="movie-player">
                <Link to="/player" state={popupModal.movieid}>
                  <button id="play">
                    {" "}
                    <img src={play} alt="" /> Play
                  </button>
                </Link>

                <button id="watchlist">
                  <img src={plus} alt="" />
                </button>
                <button id="liked">
                  <img src={like} alt="" />
                </button>
              </div>
              <div className="movie-meta-info">
                <span id="match">
                  {Math.round(movieInfo.popularity)}% match
                </span>
                <span id="age-group">16+</span>
                <span id="duration">
                  {movieInfo.runtime} {movieInfo.runtime > 3 ? "min" : "hr"}
                </span>
                <span id="video-type">HD</span>
              </div>

              <div className="movie-main-info">
                <div className="short-desc">
                  <p>{movieInfo.description}</p>
                </div>
                <div className="genera">
                  <span>Geners: </span>
                  <span>
                    {movieInfo.genera &&
                      movieInfo.genera.map((item) => {
                        return <span key={item.id}>{item.name},</span>;
                      })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="related-movies-list">
            <h3>More Like This</h3>
            <div className="movies-layout">
              {similarMoviesList &&
                similarMoviesList.map((item) => {
                  return (
                    <div className="single-similar-movie" key={item.id}>
                      <div className="movie-first-box">
                        <img
                          src={`https://image.tmdb.org/t/p/w300/${item.img}`}
                          alt=""
                        />
                        <h4>{item.title}</h4>
                      </div>
                      <div className="movie-second-box">
                        <div className="flex">
                          <h5>{Math.round(item.popularity)}% Match</h5>
                          <button>
                            <img src={plus} alt="" />
                          </button>
                        </div>
                        <p>{item.description.substring(0, 100)}...</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <button
            id="close-modal"
            onClick={() => popupModal.changeShowModal(!popupModal.showmodal)}
          >
            <img src={close} alt="" />{" "}
          </button>
        </div>
      </div>
    </>
  );
  z;
};

export default ModalContainer;
