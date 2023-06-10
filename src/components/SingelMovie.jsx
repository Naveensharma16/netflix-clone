import React, { useContext, useState } from "react";
import hovermoviecontext from "../contexts/hovermoviecontext";
import { useParams } from "react-router-dom";

const SingelMovie = ({ data, moviegeneras, index }) => {
  const hovercontext = useContext(hovermoviecontext);
  const checkparameter = useParams();

  return (
    <div
      onMouseEnter={(event) => {
        let leftPosition = 0;

        if (!Object.keys(checkparameter).length) {
          const current = event.target
            .closest(".slick-slide")
            .classList.contains("slick-current");
          const previous = event.target
            .closest(".slick-slide")
            .previousSibling?.classList.contains("slick-current");

          if (current) {
            leftPosition = "-1%";
          } else if (previous) {
            leftPosition = "33%";
          } else if (!previous) {
            leftPosition = "67%";
          }

          // below is the updation of hover context we add movie name,url, movie id, and location of the movie hover box that will appear when we hover on a particular movie
          // TODO: try to optimize this updation using the ref for toppos

          // below updation of context is used in the home page with diffrent position
          hovercontext.updateHoverMovie({
            name: data.name,
            url: data.img,
            movieid: data.id,
            generas: moviegeneras,
            leftpos: leftPosition,
            toppos: event.target.closest(".more-movie-carousel").offsetTop,
          });
        } else {
          if (!((index + 1) % 4)) {
            leftPosition = event.target.closest(".item").offsetLeft - 70;
          } else {
            leftPosition = event.target.closest(".item").offsetLeft;
          }

          // below updation of context is used in the single genera page with diffrent position
          hovercontext.updateHoverMovie({
            name: data.name,
            url: data.img,
            movieid: data.id,
            generas: moviegeneras,
            leftpos: leftPosition,
            toppos: event.target.closest(".item").offsetTop - 50,
          });
        }
      }}
    >
      <img src={data.img} alt="" />
    </div>
  );
};

export default SingelMovie;
