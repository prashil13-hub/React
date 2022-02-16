import React, { useState,useEffect } from 'react'
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Video from './Video';
import './Post.css'
import Avatar from '@mui/material/Avatar';
import Like from './Like';

function Post({userData}) {
    const [posts,setPosts] = useState(null);
    useEffect(()=>{
        let parr = []
        const unsub = database.posts.orderBy('createdAt','desc').onSnapshot((querySnapshot)=>{
            parr = []
            querySnapshot.forEach((doc)=>{
                let data = {...doc.data(),postId:doc.id}
                parr.push(data)
            })
            setPosts(parr)
        })
        return unsub
    },[])
    // console.log(posts)
    return (
        <div>
            {
                posts==null || userData==null ? 
                    <CircularProgress color="secondary" />
                :
                <div className='video-container'>
                    {
                        posts.map((post,index)=>{
                            return <React.Fragment key={index}>
                                <div className='videos'>
                                    <Video src={post.postUrl}/>
                                    <div className='fa' style={{display:'flex'}}>
                                        <Avatar src={userData.profileUrl}/>
                                        <h4>{userData.fullname}</h4>
                                    </div>
                                    <Like userData={userData} postData={post}/>
                                </div>
                            </React.Fragment>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Post