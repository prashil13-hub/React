import React, { Component } from 'react'
import {movies} from './getMovies'

class Favourites extends Component {

    constructor(){
        super();
        this.state={
            genre:[],
            currGenre:'All Genre',
            movies:[],
            currText:'',
            limit:5,
        }
    }
    handleGenreChange=(genre)=>{
        this.setState({
            currGenre:genre,
        })
    }
    componentDidMount(){
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
        let data = JSON.parse(localStorage.getItem('movies-app') || "[]");

        let temp = [];
        data.forEach((movieObj)=>{
            if(!temp.includes(genreids[movieObj.genre_ids[0]])){
                temp.push(genreids[movieObj.genre_ids[0]]);
            }
        })
        temp.unshift('All Genre');
        this.setState({
            genre:[...temp],
            movies:[...data],
        })
    }
    render() {
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
        let filterArray = [];
        if(this.state.currText==''){
            filterArray=this.state.movies;
        }else{
            filterArray=this.state.movies.filter((movieObj)=>{
                let title = movieObj.original_title.toLowerCase();
                // console.log(title)
                return title.includes(this.state.currText.toLowerCase())
            })
            

        }
        // if(this.state.currGenre=='All Genre'){
        //     filterArray=this.state.movies;
        // }else{
        //     filterArray=this.state.movies.filter((movieObj)=>
        //         genreids[movieObj.genre_ids[0]]==this.state.currGenre
        //     )
        // }
        if(this.state.currGenre!='All Genre'){
            filterArray=this.state.movies.filter((movieObj)=>
                genreids[movieObj.genre_ids[0]]==this.state.currGenre
            )
        }

    return (
        <div>
          <div className='main'>
            <div className='row'>
                <div className='col-3'>
                    <ul class="list-group favourites-generes">
                        {
                            this.state.genre.map((genre)=>(
                                this.state.currGenre == genre ?
                                <li class="list-group-item" style={{background:'#3f51b5',color:'white',fontWeight:'bold',cursor:'pointer'}}>{genre}</li>
                                :
                                <li class="list-group-item" style={{color:'#3f51b5',fontWeight:'bold',cursor:'pointer'}} onClick={()=>this.handleGenreChange(genre)}>{genre}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-9 favourites-table'>
                    <div className='row'>
                        <input type='text' className='input-group-text col' placeholder='Search' value={this.state.currText} onChange={()=>this.setState} onChange={(e)=>this.setState({currText:e.target.value})}></input>
                        <input type='number' className='input-group-text col' placeholder='Rows count'></input>
                    </div>
                    <div className='row'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col"><i class="fa-solid fa-caret-up"></i>Popularity</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterArray.map((movieObj)=>(
                                        <tr>
                                            <th scope="row"><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt="{movieObj.original_title}" style={{width:"7rem"}}/> </th>
                                            <td>{genreids[movieObj.genre_ids[0]]}</td>
                                            <td>{movieObj.popularity}</td>
                                            <td>{movieObj.vote_average} </td>
                                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li> 
                        </ul>
                    </nav>
                </div>
            </div>

          </div>
      </div>
    )
  }
}
export default Favourites;