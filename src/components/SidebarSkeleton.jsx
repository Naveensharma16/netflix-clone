import React from "react";

const SidebarSkeleton = () => {
  return (
    <div className="movie-sidebar sidebar-skeleton">
      <h3></h3>

      <div className="movie-list">
        <div className="movie-thum-skeleton">
          <div className="img-box" />
        </div>
        <div className="movie-thumb-skeleton">
          <p></p>
          {/* TODO: create a functin which will fetch the genera of singe movie by providing id */}
          <span></span>
        </div>
      </div>
      <div className="movie-list">
        <div className="movie-thum-skeleton">
          <div className="img-box" />
        </div>
        <div className="movie-thumb-skeleton">
          <p></p>
          {/* TODO: create a functin which will fetch the genera of singe movie by providing id */}
          <span></span>
        </div>
      </div>
      <div className="movie-list">
        <div className="movie-thum-skeleton">
          <div className="img-box" />
        </div>
        <div className="movie-thumb-skeleton">
          <p></p>
          {/* TODO: create a functin which will fetch the genera of singe movie by providing id */}
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
