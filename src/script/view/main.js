import App from "../model/app.js";
const main = ()=>{
    const searchBar = document.querySelector("search-bar");
    const movieList = document.querySelector("movie-list");
    searchBar.setEventClick = async ()=>{
        const movies = await App.searchMoviesByName(searchBar.getValue)
        .then(data=>data);
        if(movies.length){
            movieList.setMovies = movies;   
        }else{
            movieList.innerHTML = `<h2 class="text-center mt-4">${searchBar.getValue} Not Found</h2>`;
        }
    }




    // const data = App.searchMoviesByName("Interstellar")
    // data
    // .then(responseJSON=>console.log(responseJSON.results));

    // console.log(parseTitleInput("test","satu","dua"));

    
    
    
}


export default main;