import axios from "axios";

// below function is used to fetch the yotube id of the movie
export const movieVideoId = async(id) =>{
     const response = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f027fe75601755f162912a55c1ba85ad&language=en-US`);
     return response.data.results;
}
