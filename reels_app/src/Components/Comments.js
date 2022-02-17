import React, { useEffect, useState } from 'react'
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';


function Comments({postData}) {
    const [comments,setComments] = useState(null);
    useEffect(async()=>{
        let arr =[];
        for(let i=0;i<postData.conments.length;i++){
            let data = await database.comments.doc(postData.conments[i]).get()
            arr.push(data.data())
        }
        setComments(arr)
    },[postData])
  return (
    <div style={{marginTop:'10px'}}>
        {
            comments==null ?
                <CircularProgress color="secondary" /> 
            :
                <>
                    {
                        comments.map((comment,index)=>(
                            <div style={{display:'flex',alignItems:'center'}} key={index} >
                                <Avatar src={comment.userProfileImg}/>
                                <div>
                                    <p><strong>{comment.userName}</strong>&nbsp;&nbsp;{comment.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </>
        }
    </div>
  )
}

export default Comments