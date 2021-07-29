import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';

function App() {


  const movies = [
    {
      "_id": "60ffbe4d25d5938d0679f21e",
      "picture": "data:image/jpeg;base64,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",
      "name": "Godfather",
      "genre": "Drama",
      "desc": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      "rating": "9.2"
    },
    {
      "_id": "60ffbe4d41e4f81070364286",
      "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/b3b0acac-e503-41ef-872d-97713b6f87c5/d9ae5eu-5bfaf2fb-9648-4097-89d4-51fa45a814fc.png",
      "name": "Dead Poets Society",
      "genre": "Comedy",
      "desc": "Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.",
      "rating": "8.1"
    },
    {
      "_id": "60ffbe4d1aff641b338f97b5",
      "picture": "https://ui.assets-asda.com/dm/asdagroceries/5035822908222_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=7kOSV1&fmt=jpg&dpr=off&fit=constrain,1&wid=256&hei=256",
      "name": "Once Upon a Time... in Hollywood",
      "genre": "Comedy",
      "desc": "A faded television actor  fame and success of asdasdsadsasadsadsad fsdafsaf fsf sa fdsad",
      "rating": "7.6"
    },
    {
      "_id": "60ffbe4d3c75d375008ead28",
      "picture": "data:image/jpeg;base64,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",
      "name": "Transcendence",
      "genre": "Action",
      "desc": "A scientist's drive for artificial takes on dangerous implications when his own consciousness is uploaded into one such.",
      "rating": "6.2"
    },
    {
      "_id": "60ffbe4d0cd5653aa73c3246",
      "picture": "https://icons.iconarchive.com/icons/vitorjapah/movie-dvd-cases/256/fight-club-icon.png",
      "name": "Fight Club",
      "genre": "Drama",
      "desc": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      "rating": "8.8"
    }
  ]


  const [movie, setMovie] = useState(movies);

  const [searchValue, setSearch] = useState("");


  //delete movie
  var [movLi, setMovLi] = useState(movies);
  const deleteMovie = (mv) => {
    const newMovieList = movie.filter(
      m => m._id !== mv._id
    );
    setMovLi(newMovieList);
    setMovie(newMovieList);
  }


  //search - edit state
  const searchMovie = (e) => {

    setSearch(e.target.value);
    searchMovieArray();
    if (e.target.value === "") {
      setSearch("");
      setMovie(movLi);
    }
  }


  //search - filter
  const searchMovieArray = () => {
    const searchedMovie = movLi.filter(
      (movie) => {
        return movie.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1
      }
    )
    setMovie(searchedMovie);
  }


  //filter by genre
  const filterGenre = (e) => {
    if (e.target.value === "-1") {
      setMovie(movLi);
      return;
    }
    const filGen = movLi.filter(
      (m) => {
        return m.genre === e.target.value;
      }
    )
    setMovie(filGen);
  }

  //filter by rating
  const filterRating = (e) => {
    if (e.target.value === "-1") {
      setMovie(movLi);
      return;
    }
    const filRat = movLi.filter(
      (m) => {
        return m.rating >= e.target.value;
      }
    )
    setMovie(filRat);
  }

  //add movie
  const addMovieToList = (e) => {
    setMovie([...movLi, e]);
  }

  const [changeButton, setChangeButton] = useState(window.location.pathname);
  const [buttonContent, setButtonContent] = useState("Add a movie");

  return (
    <Router>
      <div className="App">

        <div className="container">
          <div className="row mb-2">
            <div style={{ backgroundColor: "#df5667", color: "white", borderRadius: "10px" }} className="col-10">
              <h1>Moviemania</h1>
            </div>
            <div className="col-2">

              {changeButton === "/" ?
                <Link to="/addmovie" onClick={() =>
                  setChangeButton("/addmovie") - setButtonContent("Home")}
                  className="btn btn-lg btn-primary w-100 mt-1" style={{ color: "white" }}>
                  {buttonContent}
                </Link> :
                <Link to="/" onClick={() => setChangeButton("/") - setButtonContent("Add a movie")}
                  className="btn btn-lg btn-primary w-100 mt-1" style={{ color: "white" }}>
                  {buttonContent}
                </Link>}




            </div>
          </div>

          <Switch>
            <Route path="/" exact>
              <div className="row">
                <div className="col-lg-12">
                  <Search searchMovieProp={searchMovie}
                    moviesProp={movies}
                    genreProp={filterGenre}
                    ratingProp={filterRating} />
                </div>
              </div>
              <MovieList moviesProp={movie}
                deleteMovieProp={deleteMovie}
              />

            </Route>
            <Route path="/addmovie" render={({ history }) => (
              <AddMovie addMovieProp={(movie1) => {
                addMovieToList(movie1)
                history.push("/")
              }} />
            )
            }>

            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;