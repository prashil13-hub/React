import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { database } from '../firebase';


function AddComment({userData,postData}) {
    const [text,setText] = useState('');
    // console.log(userData)
    const handleClick=()=>{
        let obj = {
            text:text,
            userProfileImg:userData.profileUrl,
            userName : userData.fullname,
        }
        database.comments.add(obj).then((doc)=>{
            database.posts.doc(postData.postId).update({
                conments:[...postData.conments,doc.id]
            })
        })
        setText('');
    }
    return (
        <div style={{width:'100%'}}>
            <TextField id="outlined-basic" label="Comment" variant="standard" size="small" sx={{width:'74%'}} variant="outlined" value={text} onChange={(e)=>setText(e.target.value)} />
            <Button variant="contained" onClick={handleClick}>Post</Button>
        </div>
    )
}

export default AddComment