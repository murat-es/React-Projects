import React from 'react'
import './MovieList.css';

function MovieList(props) {
    


    return (
        <div className="row">

            {props.moviesProp.map((movie,i) => (

                <div id="movieItem" className="col-lg-4" key={i}>
                    <div className="card m-3 shadow-sm">
                        <img src={movie.picture}
                            className="card-img-top" alt="image of movie" />
                        <div className="card-body">
                            <h4 className="card-title">{movie.name}</h4>
                            <p className="card-text">{movie.desc}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-primary disabled p-2">  {movie.genre}</button>
                                <button type="button" className="btn btn-primary disabled p-2" >IMDB rating: {movie.rating} </button>
                                <button type="button" className="btn btn-md btn-outline-danger ml-auto p-2"
                                 onClick={()=>props.deleteMovieProp(movie)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            ))}



        </div>
    )
}

export default MovieList
