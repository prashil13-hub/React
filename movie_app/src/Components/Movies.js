import React, { Component } from 'react'
// import {movies} from './getMovies'
import axios from 'axios';

export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:'',
            parr:[1],
            currPage:1,
            movies:[],
            favourites:[],
        }
    }
    async componentDidMount(){
        // Side effects
        // console.log('component did mount');
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=47a5d11539f465d2a478e3a6c644025e&language=en-US&page=${this.state.currPage}`)
        let data = res.data;
        // console.log(data);
        // console.log('mounting is done');
        this.setState({
            movies:[...data.results]
        })
    }
    changeMovies=async()=>{
        console.log("hey");
        // let cpage = this.state.currPage;
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=47a5d11539f465d2a478e3a6c644025e&language=en-US&page=${this.state.currPage}`)
        let data = res.data;
        this.setState({
            movies:[...data.results]
        })
    }
    handleRight=async()=>{
        let temparr=[...this.state.parr];
        temparr.push(temparr.length+1);
        this.setState({
            parr:[...temparr],
            currPage:this.state.currPage+1,
        },this.changeMovies)
        // setState is work as asyncronous if we want to call function after setState then we have to provide defination as call back
        // changeMovies();   
    }
    handleLeft=()=>{
        if(this.state.currPage!=1){
            this.setState({
                currPage:this.state.currPage-1,
            },this.changeMovies)
        }
    }
    handlePaggingNum=(index)=>{
        if(index!=this.state.currPage){
            this.setState({
                currPage:index,
            },this.changeMovies)
        }
    }
    handleFavourites=(movie)=>{
        let oldData = JSON.parse(localStorage.getItem('movies-app') || "[]")    //local storage me jo bhi data same hota he vo as a string save hota he.
        if(this.state.favourites.includes(movie.id)){
            oldData = oldData.filter((m)=>m.id!=movie.id)
        }else{
            oldData.push(movie)
        }
        localStorage.setItem('movies-app',JSON.stringify(oldData));    // setState is asyncronous and setItem is asyncronous
        console.log(oldData);
        this.handleFavouritesState();
    }
    handleFavouritesState=()=>{
        let oldData = JSON.parse(localStorage.getItem('movies-app') || "[]") 
        let temp = oldData.map((movie)=>movie.id);
        this.setState({
            favourites:[...temp],
        })
    }
    render() {
        // console.log('render');
        // let movie = movies.results;
        return (
            <div>
                {
                    this.state.movies.length==0 ? 
                        <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <div>
                        <h3 className='text-center'> <strong>Trending</strong></h3>
                        <div className='movies-list'>
                            {
                                this.state.movies.map((movieObj)=>(
                                    <div className="card movies-card" key={movieObj.id} onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                                        <img style={{height:'40vh',width:'20vw'}} src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movies-img" alt="..."/>
                                        {/* <div className="card-body"> */}
                                            <h2 className="card-title movies-title">{movieObj.original_title}</h2>
                                            {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                                            {
                                                this.state.hover == movieObj.id &&
                                                <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                                                    <a href="#" className="btn btn-primary movies-btn" onClick={()=>this.handleFavourites(movieObj)}>{this.state.favourites.includes(movieObj.id)?"Remove" : "Add to Favourite"}</a>
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
                                    <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Prev</a></li>
                                    {
                                        this.state.parr.map((val)=>(
                                            <li class="page-item"><a class="page-link" onClick={()=>this.handlePaggingNum(val)}>{val}</a></li>
                                        ))
                                    }
                                    <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
