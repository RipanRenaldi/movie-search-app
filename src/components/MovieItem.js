import App from "../script/model/app.js";

class MovieItem extends HTMLElement{
    
    connectedCallback(){
        this.render();
    }

    set setMovie(movie){
        this._movie = movie;
        this.render();
    }
    get getDate(){
        const movie = this._movie.release_date.split("-");
        const [year] = movie;
        return year;
    }

    render(){
        //https://image.tmdb.org/t/p/original/pERBi1D8NNpK1q7dEnXDhrLz3le.jpg
        this.innerHTML = "";
        this.innerHTML = `
        
            <div class="card mb-5" id="tujuan">
                <img src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}" />
                <div class="card-body">
                    <h5 class="card-title">${this._movie.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Rating : ${this._movie.vote_average} <i class="fa-solid fa-star"></i></h6>
                    <p>${this.getDate}</p>
                    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="detailMovie" data-id="${this._movie.id}">Detail</a>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog modal-lg" id="modal-content"></div>
            </div>
        `
        const modalContent = document.getElementById("modal-content");
        this.querySelector("#detailMovie").addEventListener("click",  async function(){
            const movieSelected = await App.searchMovieById(this.getAttribute("data-id"))
            modalContent.innerHTML = `
            <div class="modal-content ">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${movieSelected.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row"> 
                            <div class="col-md-4"> 
                                <img src="https://image.tmdb.org/t/p/original/${movieSelected.poster_path}" class="card-img-top" alt="${movieSelected.title}" />
                            </div>
                            <div class="col-md-8"> 
                            <h3>${movieSelected.title} </h3>
                            <h5>Production Companies : ${movieSelected.production_companies.map(value=>value.name)}</h5>
                            <h5>Release Date : ${movieSelected.release_date}</h5>
                            <h5>Overview : </h5>
                            <p>${movieSelected.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
            `
        })
    }
}

customElements.define("movie-item",MovieItem);