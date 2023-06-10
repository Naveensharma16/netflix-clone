import React, { useEffect, useState } from "react";
import SingelMovie from "../components/SingelMovie";
import Slider from "react-slick";

import { genera } from "../api/genera";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

const SingleGenraType = ({ heading, movies, settings, url }) => {
  const [generas, setGeneras] = useState();
  useEffect(() => {
    // calling genera function to get all the generas
    genera().then((res) => {
      setGeneras(res);
    });
    // calling genera function to get all the generas
  }, []);

  // function to get the name of genera
  const filterGenera = (gens) => {
    const filtergens =
      generas &&
      generas.filter((item) => {
        if (gens.includes(item.id)) {
          return true;
        }
      });
    const genName =
      generas &&
      filtergens.map((item) => {
        return item.name;
      });
    return genName;
  };
  // function to get the name of genera

  return (
    <div className="continue-watching more-movie-carousel">
      <h3 className="nine">
        {heading}{" "}
        <Link to={`genera/${url}`}>
          {" "}
          <span>E</span>
          <span>x</span>
          <span>p</span>
          <span>a</span>
          <span>n</span>
          <span>d</span> <span>A</span>
          <span>l</span>
          <span>l</span>
        </Link>
      </h3>
      {/* below code check if movies are loaded and if movies are not loaded show skeleton component */}
      {movies !== undefined ? (
        <Slider {...settings}>
          {movies.map((data, i) => {
            const moviegeneras = filterGenera(data.generas);

            return (
              <div className="item" key={data.id}>
                <SingelMovie data={data} moviegeneras={moviegeneras} />
              </div>
            );
          })}
        </Slider>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default SingleGenraType;
