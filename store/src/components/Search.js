import React, { useState } from 'react'

function Search(props) {
    const newGenre=[];

    props.moviesProp.map(m=> newGenre.push(m.genre));  


    return (
        <div className="mt-4">
            <form onSubmit={e => e.preventDefault()}>
                <div className="row mb-3">
                    <div className="col-4">
                        <input onChange={props.searchMovieProp} type="text"
                            className="form-control" placeholder="Search a movie" />
                    </div>
                    <div className="col-4">
                        <select onChange={e=> props.ratingProp(e)}  className="form-select" aria-label="Default select example">
                            <option defaultValue value="-1">Filter by rating</option>
                            <option value="9">9.0</option>
                            <option value="8">8.0</option>
                            <option value="7">7.0</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <select onChange={e=> props.genreProp(e)} className="form-select" aria-label="Default select example">
                            <option defaultValue value="-1">Filter by genre</option>
                           
                           {[...new Set(newGenre)].map((m,i)=>
                            <option key={i} value={m}>{m}</option>
                           )}
                           
                        </select>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Search
