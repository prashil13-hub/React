import React, { useState,useEffect } from 'react'
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Video from './Video';
import './Post.css'
import Avatar from '@mui/material/Avatar';
import Like from './Like';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Like2 from './Like2';
import AddComment from './AddComment';
import Comments from './Comments';


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

    const [open, setOpen] = React.useState(null);
    const handleClickOpen = (id) => {
        setOpen(id);
    };
    const handleClose = () => {
        setOpen(null);
    };
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
                                    <ChatBubbleIcon className='char-styling' onClick={()=>handleClickOpen(post.postId)}/>
                                    <Dialog 
                                        open={open==post.postId} 
                                        onClose={handleClose}
                                        maxWidth='md'
                                        fullWidth={true}
                                    >
                                        <div className='modal-container'>
                                            <div className='video-container-modal'>
                                                {/* <Video src={post.postUrl} className="modal-video"/> */}
                                                <video autoPlay={false} className="modal-video" muted="muted" controls>
                                                    <source  src={post.postUrl}/>
                                                </video>
                                            </div>
                                            <div className='comment-container'>
                                                <Card className='card1'>
                                                    <Comments postData={post}/>
                                                </Card>
                                                <Card variant='outline' className='card2'>
                                                    <Typography>
                                                        {
                                                            post.likes.length==0?'':`Liked by ${post.likes.length} users`
                                                        }
                                                    </Typography>
                                                    <div>
                                                        <Like2 userData={userData} postData={post} />
                                                        <AddComment  userData={userData} postData={post}/>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </Dialog>
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