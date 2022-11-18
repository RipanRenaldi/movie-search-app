class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set setEventClick(event){
      this._event = event;
      this.render();
    }

    render(){
        this.innerHTML = `
        <div class="row justify-content-center">
        <div class="col-md-8">
          <h1 class="text-center mb-3">Search Movies</h1>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Harry Potter"
              aria-describedby="button-addon2"
              id="keyword"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" id="searchButton">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
      `

      this.querySelector("#searchButton").addEventListener("click",this._event);

    }

    get getValue(){
      return this.querySelector("#keyword").value;
    }
}

customElements.define("search-bar",SearchBar);