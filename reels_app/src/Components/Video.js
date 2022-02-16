import React from 'react'
import './Video.css'
import ReactDOM from 'react-dom';

function Video(props) {
    const handleCkick = (e) =>{
        e.preventDefault();
        e.target.muted= !e.target.muted;
    }
    const handleScroll = (e)=>{
        let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling
        if(next){
            next.scrollIntoView()
            e.target.muted=true
        }
    }
    return (
        <video className='videos-styling' src={props.src} muted="muted" onClick={(e)=>handleCkick} onEnded={handleScroll} />
        // controls :- use to give controls to videos.
    )
}

export default Video