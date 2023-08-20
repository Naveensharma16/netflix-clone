import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

import { movieVideoId } from "../api/movievideoid";

const Player = ({ url }) => {
  const [videoId, setVideoId] = useState(0);
  const location = useLocation();
  const propsData = location.state;

  useEffect(() => {
    movieVideoId(propsData)
      .then((result) => {
        return result[0].key;
      })
      .then((result) => {
        setVideoId(result);
      });
  }, []);

  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={"100%"}
        height={"100vh"}
        playing={true}
        controls={true}
        style={{ overflow: "hidden" }}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
            quality: [
              {
                label: "1080p",
                file: `https://www.youtube.com/watch?v=${videoId}`,
              },
              {
                label: "720p",
                file: `https://www.youtube.com/watch?v=${videoId}`,
              },
              {
                label: "480p",
                file: `https://www.youtube.com/watch?v=${videoId}`,
              },
            ],
          },
        }}
      />
    </>
  );
};

export default Player;
