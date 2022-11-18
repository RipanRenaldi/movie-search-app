import * as bootstrap from "bootstrap";
import css from "./style.scss";
import "./components/SearchBar.js";
import "./components/MovieList.js";
import "./components/MovieItem.js";
import "./script/model/app.js";
import main from "./script/view/main.js";


window.addEventListener('load', main);
