import "./MovieItem.js";

class MovieList extends HTMLElement{
    set setMovies(movies){
        this._movies = movies;
        this.render();
    }

    render(){
        this.innerHTML = "";
        this._movies.forEach(movie=>{
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.classList.add("col-md-4")
            movieItemElement.setMovie = movie;
            this.appendChild(movieItemElement);
        });
    }
}
customElements.define("movie-list",MovieList);