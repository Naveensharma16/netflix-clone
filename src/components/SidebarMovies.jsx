// this component is use to for Top Searches and Popular movies as both section have same layout we can use single component with diffrent data using props

import React, { useEffect, useState } from "react";
import SidebarSkeleton from "./SidebarSkeleton";

const SidebarMovies = ({ title, fetchmovie }) => {
  // below state is used to store the list of movies we are gonna show it will hold the type of movie we are fetching in api for ex "top searches" and "popular movies"
  const [movieList, setMovieList] = useState([]);

  // we have to call the api function in in useEffect with empty dependency array as it was updating the state which will re-render the app which in turn will call the function again an will create a loop of re-rendering
  useEffect(() => {
    fetchmovie()
      .then((res) => {
        const topMovies = [];
        for (let index = 0; index < 3; index++) {
          topMovies.push({
            img: res[index].img,
            name: res[index].name,
            id: res[index].id,
          });
        }
        return topMovies;
      })
      .then((data) => {
        setMovieList(data);
      });

    // added a cleanup function as it was updating state with 6 items
    return () => {
      setMovieList([]);
    };
  }, []);

  return (
    <div className="movie-sidebar">
      <h3>{title}</h3>
      {/* below code show skeleton component if movies are not loaded */}
      {movieList.length > 0 ? (
        movieList.map((item) => {
          return (
            <div className="movie-list" key={item.id}>
              <div className="movie-thum-poster">
                <img src={item.img} alt="" />
              </div>
              <div className="movie-thumb-details">
                <p>{item.name}</p>
                {/* TODO: create a functin which will fetch the genera of singe movie by providing id */}
                <span>Action/Drama</span>
              </div>
            </div>
          );
        })
      ) : (
        <SidebarSkeleton />
      )}
    </div>
  );
};

export default SidebarMovies; // this component is use to for Top Searches and Popular movies as both section have same layout we can use single component with diffrent data using props
