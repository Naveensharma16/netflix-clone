// this context is used to check wheather we can show the modal component or not we cound have used state also in this place it store a boolean value and movieid to fetch data of the particular movie
import React, { useState } from "react";
import showmodal from "../contexts/showmodal";

const ShowModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState({ show: false, movieId: 0 });
  return (
    <showmodal.Provider
      value={{
        showmodal: showModal.show,
        movieid: showModal.movieId,
        changeShowModal: (value) => setShowModal(value),
      }}
    >
      {children}
    </showmodal.Provider>
  );
};

export default ShowModalProvider;
