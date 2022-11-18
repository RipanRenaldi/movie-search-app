import axios from "axios";
const API_KEY = "7490d4c3d34f30a5dd5c89dd0a6754fd"

class App {
    static async searchMovieById(id){
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    static async searchMoviesByName(title){
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}}`)
            const responseJSON = await response.data;
            return responseJSON.results;
        }catch(e){  
            console.log(e);
        }
    }
}

export default App;