import React, { Component } from 'react'
import {movies} from './getMovies'

export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:'',
            parr:[1],
        }
    }
  render() {
    let movie = movies.results;
    return (
        <div>
          {
            movie.length==0 ? 
                <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            :
            <div>
                <h3 className='text-center'> <strong>Trending</strong></h3>
                <div className='movies-list'>
                    {
                        movie.map((movieObj)=>(
                            <div className="card movies-card" key={movieObj.id} onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                                <img style={{height:'40vh',width:'20vw'}} src="https://images.unsplash.com/photo-1572542006263-35bf4f578b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" className="card-img-top movies-img" alt="..."/>
                                {/* <div className="card-body"> */}
                                    <h2 className="card-title movies-title">{movieObj.original_title}</h2>
                                    {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                                    {
                                        this.state.hover == movieObj.id &&
                                        <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                                            <a href="#" className="btn btn-primary movies-btn">Add to Favourite</a>
                                        </div>
                                    }
                                    
                                    
                                {/* </div> */}
                            </div>
                        ))
                    }
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                            {
                                this.state.parr.map((val)=>(
                                    <li class="page-item"><a class="page-link" href="#">{val}</a></li>
                                ))
                            }
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
          }
      </div>
    )
  }
}
