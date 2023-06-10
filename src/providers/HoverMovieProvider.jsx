// this provider will be used to store the data of the movie you have hovered on home page and single genera movies
// we have created a context in which we have created a provider and passed children as prop so any component used between this component can have access to the context

import { useReducer, useState } from "react";
import hovermoviecontext from "../contexts/hovermoviecontext";

const HoverMovieProvider = ({ children }) => {
  const [hoverMovie, setHoverMovie] = useState({
    name: "",
    url: "",
    movieid: 0,
    generas: [],
    leftpos: "unset",
    toppos: "unset",
  });

  return (
    <>
      <hovermoviecontext.Provider
        value={{
          moviedata: hoverMovie,
          updateHoverMovie: (data) => setHoverMovie(data),
        }}
      >
        {children}
      </hovermoviecontext.Provider>
    </>
  );
};

export default HoverMovieProvider;
