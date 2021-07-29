import React from 'react';
import serialize from 'form-serialize';

function AddMovie(props) {

    const formSubmit = (e)=> {
        e.preventDefault();
        const newMovie = serialize(e.target, { hash: true });
        console.log(newMovie);
        props.addMovieProp(newMovie);
    }

    return (
        <div>
            <form className="pb-5" onSubmit={formSubmit}>
                <div className="row pb-3">
                    <div className="form-group col-md-6">
                        <input type="text" placeholder="Movie Name" name="name" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" placeholder="Genre" name="genre" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" placeholder="Rating" name="rating" className="form-control" />
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="form-group col-md-12">
                        <input type="text" placeholder="Image link" name="picture" className="form-control" />
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="form-group col-md-12">
                        <textarea type="text" placeholder="Description" name="desc" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-danger w-50 mx-auto">Add Movie</button>
                </div>
            </form>
        </div>
    )
}

export default AddMovie
