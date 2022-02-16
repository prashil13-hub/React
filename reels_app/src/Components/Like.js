import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { database } from '../firebase';


function Like({userData,postData}) {
    const [like,setLike] = useState(null);
    useEffect(()=>{
        let check = postData.likes.includes(userData.userId)
        setLike(check)
    },[postData])

    const handleLike=()=>{
        if(like==true){
            let narr = postData.likes.filter((ele)=>ele!=userData.userId);
            database.posts.doc(postData.postId).update({
                likes:narr
            })
        }else{
            let narr = [...postData.likes,userData.userId]
            database.posts.doc(postData.postId).update({
                likes:narr
            })
        }
    }
    return (
        <div>
            {
                like!=null?
                <div className='like-icon'>
                    {
                        like==true?
                        <FavoriteIcon onClick={handleLike} style={{cursor:'pointer'}}/>
                        :
                        <FavoriteBorderIcon onClick={handleLike} style={{cursor:'pointer'}}/>
                    }
                </div>
                :
                <>
                </>
            }
        </div>
    )
}

export default Like