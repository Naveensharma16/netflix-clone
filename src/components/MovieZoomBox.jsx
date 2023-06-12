import React, { useContext } from "react";
import hovermoviecontext from "../contexts/hovermoviecontext";
import plus from "../assets/addwatchlist.png";
import like from "../assets/thumbsup.png";
import down from "../assets/downarrow.png";
import play from "../assets/play.png";

import showmodal from "../contexts/showmodal";
import { Link } from "react-router-dom";

const MovieZoomBox = () => {
  const moviecontext = useContext(hovermoviecontext);
  const popupModal = useContext(showmodal);

  // random number for like,hour and age
  const likepercent = Math.floor(Math.random() * (90 - 10));
  const hour = Math.ceil(Math.random() * 2);

  const handlePopupOpen = () => {
    window.scrollTo(0, 0);
    popupModal.changeShowModal({
      show: true,
      movieId: moviecontext.moviedata.movieid,
    });
  };

  return (
    <>
      <div
        className={`show-single-movie-zoom ${
          moviecontext.moviedata.url ? "zoom" : ""
        }`}
        style={{
          top: moviecontext.moviedata.toppos,
          left: moviecontext.moviedata.leftpos,
        }}
        onMouseLeave={(e) => {
          moviecontext.updateHoverMovie({
            name: "",
            url: "",
            generas: [],
            leftpos: "unset",
            toppos: "unset",
          });
        }}
      >
        {moviecontext.moviedata.url && (
          <>
            <div className="movie-upper-container">
              <img src={moviecontext.moviedata.url} alt="" />
              <h3 style={{ color: "#fff" }}>{moviecontext.moviedata.name}</h3>
            </div>
            <div className="movie-lower-content">
              <div className="data-first-row">
                <ul>
                  <li>
                    <Link to={"/player"} state={moviecontext.moviedata.movieid}>
                      <img src={play} alt="" />
                    </Link>
                  </li>
                  <li>
                    <img src={plus} alt="" />
                  </li>
                  <li>
                    <img src={like} alt="" />
                  </li>
                  {/* below onclick function will will set the sroll to top and chagne the value of show modal context to true and also set the movie id field in modal context so we can fetch the yotubeid of the video for that movie
                   */}
                  <li onClick={handlePopupOpen}>
                    <img src={down} alt="" />
                  </li>
                </ul>
              </div>
              <div className="data-second-row">
                <span id="match">{likepercent}% match</span>
                <span id="age-group">16+</span>
                <span id="duration">
                  {hour} {hour > 3 ? "min" : "hr"}
                </span>
                <span id="video-type">HD</span>
              </div>
              <div className="genera-list">
                <ul>
                  {moviecontext.moviedata.generas.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieZoomBox;
