import {movies} from './getMovies'
import React, { Component } from 'react'

class Banner extends Component {

    render() {
        // console.log(movies)
        let movie = movies.results[0];
        return (
            <>
                {
                    movie ==''? 
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    :
                    <div className="card banner-card" >
                        <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top banner-img" alt="..."/>
                        {/* <div className="card-body"> */}
                            <h1 className="card-title banner-title">{movie.original_title}</h1>
                            <p className="card-text banner-text">{movie.overview}</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        {/* </div> */}
                    </div>
                }
            </>
        )
    }
}
export default Banner;
