import React, { useState, useEffect, useRef, useContext } from "react";
import Logo from "../components/Logo";
import SidebarMenu from "../components/SidebarMenu";
import SearchBar from "../components/SearchBar";
import SidebarMovies from "../components/SidebarMovies";

import HoverMovieProvider from "../providers/HoverMovieProvider";

import ContentFilterType from "../components/ContentFilterType";
import CurrentProfile from "../components/CurrentProfile";

// usePrams is used to get the parameter of url
import { useParams } from "react-router-dom";

import MovieZoomBox from "../components/MovieZoomBox";

import { createPortal } from "react-dom";

// function to get the popular movies and top rated movies
import { getPopularMovies } from "../api/popularmovies";
import { getTopRatedMovies } from "../api/topratedmovies";
// function to get the popular movies and top rated movies

// custom hook to fetch the movies according to a particualr genera
import { useFetchGeneraMovies } from "../customhooks/useFetchGeneraMovies";

import SingelMovie from "../components/SingelMovie";
// api to get all the generas
import { genera } from "../api/genera";

import showmodal from "../contexts/showmodal";
import ModalContainer from "../modals/ModalContainer";
import SiteFooter from "../layout/SiteFooter";

const SingleGeneraMovies = () => {
  const { generaname } = useParams();

  // state to check the page for scroll when user scroll to bottom number is increased and api is called to fetch more data
  const [page, setPage] = useState(1);
  // custom hook that takes genera name and page number and return us array of object
  const movies = useFetchGeneraMovies(generaname, page);

  // state to store the name of all generas with id
  const [generas, setGeneras] = useState();

  // element stored to observe at the end of scroll
  const loader = useRef(null);

  // this ref is used to start the loader to solve the problem of page loading Note:write a proper comment
  const startLoader = useRef(null);

  // context to check wheather to open popup or not it also have movie id whose popup is opened
  const popupModal = useContext(showmodal);

  // function to be called in bottom hit observer it sets page state which in turn call a custom hook which return movies according to page number including previous results this gives us infinite scroll as when user reach bottom of screen function is called and movies array is updated
  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  // this function is used to handle observer on top scroll and creates a new observer
  const handleTopobserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      const optionforbottomobserver = {
        root: null,
        rootMargin: "20px",
        threshold: 0,
      };
      // observer to intersect when user hit bottom of page
      const observer = new IntersectionObserver(
        handleObserver,
        optionforbottomobserver
      );
      if (loader.current) {
        observer.observe(loader.current);
      }
    }
  };

  // this effect is only called once or if there are some changes in handleObserver function
  useEffect(() => {
    // options for top scroll objserver
    const optionfortopobserver = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    // the below observer is used to trigger another observer that calls the api when user scroll to bottom
    // i created this observer to fix the problem when user comes to a single genera movie page movies were not loading properly cause when page gets load intersection get triggers to solve this i created a observer which will trigger when user scroll to top and in that observer i called another observer
    const topObserver = new IntersectionObserver(
      handleTopobserver,
      optionfortopobserver
    );
    if (startLoader.current) {
      topObserver.observe(startLoader.current);
    }
  }, [handleObserver]);

  // this effect is called only once genera function return a promise that fullfillls into list of genras
  // we call genera function  in useeffect cause we are setting a state in it which triggers a infinte re-render issue as state updation re-render component
  useEffect(() => {
    // calling genera function to get all the generas
    genera().then((res) => {
      setGeneras(res);
    });
    // calling genera function to get all the generas
  }, []);

  // function to get the name of genera
  const filterGenera = (gens) => {
    // filtering the ids according to movie
    const filtergens =
      generas &&
      generas.filter((item) => {
        if (gens.includes(item.id)) {
          return true;
        }
      });
    // filtering the name of generas from the return value of above function
    const genName =
      generas &&
      filtergens.map((item) => {
        return item.name;
      });
    return genName;
  };
  // function to get the name of genera

  return (
    <>
      <div ref={startLoader}></div>

      <div className="container home-page-layout">
        <div className="left-menu-sidebar">
          <div className="brand-logo">
            <Logo />
          </div>
          <SidebarMenu />
        </div>

        <div className="main-content-box">
          {/* context provider component */}
          <HoverMovieProvider>
            <div className="main-header">
              <div className="movie-type-filter">
                <ContentFilterType />
              </div>
              <div className="current-user-profile">
                <CurrentProfile />
              </div>
            </div>

            <div className="movie-type-outer single-category-movie">
              <div className="continue-watching more-movie-carousel">
                <h3>
                  <span>{generaname}</span> movies{" "}
                </h3>

                <div className="movies-list-container">
                  {movies &&
                    movies.map((data, index) => {
                      const moviegeneras = filterGenera(data.generas);
                      const filtyeredMoviesData = {
                        img: data.img,
                        name: data.name,
                        id: data.id,
                      };
                      return (
                        <div className="item" key={data.id}>
                          {/* index of the element is passed to set the position of hover box */}
                          <SingelMovie
                            data={filtyeredMoviesData}
                            moviegeneras={moviegeneras}
                            index={index}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="movie-hover-box">
                <MovieZoomBox />
              </div>

              <div ref={loader}></div>
            </div>
          </HoverMovieProvider>
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

export default SingleGeneraMovies;
