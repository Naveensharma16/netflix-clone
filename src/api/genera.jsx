import axios from "axios";


export const genera = async() =>{
     const response = await axios("https://api.themoviedb.org/3/genre/movie/list?api_key=f027fe75601755f162912a55c1ba85ad&language=en-US");
     return response.data.genres;
}


