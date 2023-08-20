import React, {
  useState,
  useEffect,
  useContext,
  Suspense,
  useReducer,
} from "react";

// components used by page
import SidebarMenu from "../components/SidebarMenu";
import SearchBar from "../components/SearchBar";
import SidebarMovies from "../components/SidebarMovies";
import ContentFilterType from "../components/ContentFilterType";
import CurrentProfile from "../components/CurrentProfile";

// logo and plus icon image
import Logo from "../components/Logo";
import plus from "../assets/addwatchlist.png";

// slick slider used in a genera movie slider
import Slider from "react-slick";

// function to get the popular movies and top rated movies
import { getPopularMovies } from "../api/popularmovies";
import { getTopRatedMovies } from "../api/topratedmovies";
// function to get the popular movies and top rated movies

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

// component used for the zoom box
import MovieZoomBox from "../components/MovieZoomBox";
// component used to show the movies of particular genra
import SingleGenraType from "../components/SingleGenraType";

// component used for modal box
import ModalContainer from "../modals/ModalContainer";
// context used to show or hide modal
import showmodal from "../contexts/showmodal";

import { createPortal } from "react-dom";

import { Link } from "react-router-dom";
import { getBannerMovies } from "../api/bannerMovies";
import { getThirllerMovies } from "../api/thrillermovies";
import { getRomanceMovies } from "../api/romancemovies";
import { getDocumentryMovies } from "../api/documentrymovies";
import { getsifiMovies } from "../api/sifimovies";
import { getMysteryMovies } from "../api/mysterymovies";
import BannerSkeleton from "../components/BannerSkeleton";

import hovermoviecontext from "../contexts/hovermoviecontext";
import SiteFooter from "../layout/SiteFooter";

const Home = () => {
  // initial state for the movie reducer
  const moviesinitialState = {
    animatedMovies: [],
    horrorMovies: [],
    historyMovies: [],
    hollywoodMovies: [],
    recommendMovies: [],
    continueMovies: [],
    bannerMovies: [],
    thrillerMovies: [],
    romanceMovies: [],
    documentryMovies: [],
    sifiMovies: [],
    mysteryMovies: [],
  };

  const moviesReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ANIMATED_MOVIES":
        return {
          ...state,
          animatedMovies: action.payload,
        };
      case "ADD_HORROR_MOVIES":
        return {
          ...state,
          horrorMovies: action.payload,
        };
      case "ADD_HISTORY_MOVIES":
        return {
          ...state,
          historyMovies: action.payload,
        };
      case "ADD_HOLLYWOOD_MOVIES":
        return {
          ...state,
          hollywoodMovies: action.payload,
        };
      case "ADD_RECOMMEND_MOVIES":
        return {
          ...state,
          recommendMovies: action.payload,
        };
      case "ADD_CONTINUE_MOVIES":
        return {
          ...state,
          continueMovies: action.payload,
        };
      case "ADD_BANNER_MOVIES":
        return {
          ...state,
          bannerMovies: action.payload,
        };
      case "ADD_THRILLER_MOVIES":
        return {
          ...state,
          thrillerMovies: action.payload,
        };
      case "ADD_ROMANCE_MOVIES":
        return {
          ...state,
          romanceMovies: action.payload,
        };
      case "ADD_DOCUMENTRY_MOVIES":
        return {
          ...state,
          documentryMovies: action.payload,
        };
      case "ADD_SIFI_MOVIES":
        return {
          ...state,
          sifiMovies: action.payload,
        };
      case "ADD_MYSTERY_MOVIES":
        return {
          ...state,
          mysteryMovies: action.payload,
        };
      default:
        return state;
    }
  };

  const [moviestate, dispatch] = useReducer(moviesReducer, moviesinitialState);

  // using the modal provider to access the value of modal Provider
  const popupModal = useContext(showmodal);
  const moviecontext = useContext(hovermoviecontext);

  // useeffect hook is called with empty dependencies so they are called only once when component rendered
  useEffect(() => {
    // function to fetch the banner image
    getBannerMovies().then((result) => {
      dispatch({ type: "ADD_BANNER_MOVIES", payload: result });
    });

    // calling animated movie function promise
    getAnimationMovies().then((result) => {
      dispatch({ type: "ADD_ANIMATED_MOVIES", payload: result });
    });

    // calling horror movie function promise
    getHorrorMovies().then((result) => {
      dispatch({ type: "ADD_HORROR_MOVIES", payload: result });
    });
    // calling horror movie function promise

    // calling history movie function promise
    getHistoryMovies().then((result) => {
      dispatch({ type: "ADD_HISTORY_MOVIES", payload: result });
    });
    // calling history movie function promise

    // calling hollywood popular movies function promise
    getPopularMovies().then((result) => {
      dispatch({ type: "ADD_HOLLYWOOD_MOVIES", payload: result });
    });
    // calling hollywood popular movie function promise

    // calling hollywood popular movies function promise
    getRecomendedMovie().then((result) => {
      dispatch({ type: "ADD_RECOMMEND_MOVIES", payload: result });
      dispatch({ type: "ADD_CONTINUE_MOVIES", payload: result });
    });

    // calling thriller movies function promise
    getThirllerMovies().then((result) => {
      dispatch({ type: "ADD_THRILLER_MOVIES", payload: result });
    });

    // calling romace movies function promise
    getRomanceMovies().then((result) => {
      dispatch({ type: "ADD_ROMANCE_MOVIES", payload: result });
    });

    // calling documentry movies function promise
    getDocumentryMovies().then((result) => {
      dispatch({ type: "ADD_DOCUMENTRY_MOVIES", payload: result });
    });

    // calling sifi movies function promise
    getsifiMovies().then((result) => {
      dispatch({ type: "ADD_SIFI_MOVIES", payload: result });
    });

    // calling mystery movies function promise
    getMysteryMovies().then((result) => {
      dispatch({ type: "ADD_MYSTERY_MOVIES", payload: result });
    });
  }, []);

  // setting for single genera movie slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // setting for hero slider
  const mainSliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <div className="container home-page-layout">
        <div className="left-menu-sidebar">
          <div className="brand-logo">
            <Logo />
          </div>
          <SidebarMenu />
        </div>

        <div
          className="main-content-box"
          onMouseLeave={() => {
            setTimeout(() => {
              moviecontext.updateHoverMovie({
                name: "",
                url: "",
                generas: [],
                leftpos: "unset",
                toppos: "unset",
              });
            }, 300);
          }}
        >
          {/* called the hover movie provider component as parent component so we can use the provider value in all the children */}
          <div className="main-header">
            <div className="movie-type-filter">
              <ContentFilterType />
            </div>
            <div className="current-user-profile">
              <CurrentProfile />
            </div>
          </div>

          <div className="top-movies">
            <Slider {...mainSliderSetting}>
              {moviestate.bannerMovies.length > 0 ? (
                moviestate.bannerMovies.map((data) => {
                  return (
                    <div className="item" key={data.id}>
                      <img src={data.img} alt="" />

                      <div className="movie-data">
                        <h3>{data.name}</h3>
                        <div className="inner-flex">
                          <Link
                            className="watch-now"
                            to="/player"
                            state={data.id}
                          >
                            Watch
                          </Link>

                          <button className="add-wishlist">
                            <img src={plus} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <BannerSkeleton />
              )}
            </Slider>
          </div>

          <div className="movie-type-outer">
            <SingleGenraType
              heading="Top rated movies"
              url="toprated"
              movies={moviestate.bannerMovies}
              settings={settings}
            />

            {/* recommended movie component */}
            <SingleGenraType
              heading="Recommended To You"
              url="recommended"
              movies={moviestate.recommendMovies}
              settings={settings}
            />
            {/* recommended movie component */}

            {/* poplular hollywood movie component */}
            <SingleGenraType
              heading="Popular Hollywood Movies"
              url="popular"
              movies={moviestate.hollywoodMovies}
              settings={settings}
            />
            {/* poplular hollywood movie component */}

            {/* Animation movie component */}
            <SingleGenraType
              heading="Animation Movies"
              url="animation"
              movies={moviestate.animatedMovies}
              settings={settings}
            />
            {/* Animation  movie component */}

            {/* Horror movie component */}
            <SingleGenraType
              heading="Horror Movies"
              url="horror"
              movies={moviestate.horrorMovies}
              settings={settings}
            />
            {/* Horror  movie component */}

            {/* History movie component */}
            <SingleGenraType
              heading="History Movies"
              url="history"
              movies={moviestate.historyMovies}
              settings={settings}
            />
            {/* History movie component */}

            {/* Thriller movie component */}
            <SingleGenraType
              heading="Thriller Movies"
              url="thriller"
              movies={moviestate.thrillerMovies}
              settings={settings}
            />
            {/* Thriller movie component */}

            {/* Romance movie component */}
            <SingleGenraType
              heading="Romance Movies"
              url="romance"
              movies={moviestate.romanceMovies}
              settings={settings}
            />
            {/* Romance movie component */}

            {/* Documentry movie component */}
            <SingleGenraType
              heading="Documentry Movies"
              url="documentry"
              movies={moviestate.documentryMovies}
              settings={settings}
            />
            {/* Documentry movie component */}

            {/* sifi movie component */}
            <SingleGenraType
              heading="Sifi Movies"
              url="sifi"
              movies={moviestate.sifiMovies}
              settings={settings}
            />
            {/* sifi movie component */}

            {/* mystery movie component */}
            <SingleGenraType
              heading="Mystery Movies"
              url="mystery"
              movies={moviestate.mysteryMovies}
              settings={settings}
            />
            {/* mystery movie component */}

            {/* movie zoombox component is called here which will be seen if there will be any data in hover movie context */}
            <div className="movie-hover-box">
              <MovieZoomBox />
            </div>
          </div>
        </div>

        <div className="right-search-sidebar">
          <div className="search-movies">
            <SearchBar />
          </div>
          <div className="movies">
            <SidebarMovies title="Top Rated" fetchmovie={getTopRatedMovies} />
          </div>
          <div className="movies">
            <SidebarMovies
              title="Popular Movies"
              fetchmovie={getPopularMovies}
            />
          </div>
        </div>
      </div>

      {/* if the modal context have true value it will create a portal on body */}
      {popupModal.showmodal && createPortal(<ModalContainer />, document.body)}
      <SiteFooter />
    </>
  );
};

export default Home;
