import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouteMatch } from "react-router-dom";

function Profile(props) {
    const ids = props.id;
    console.log(ids)
    const match = useRouteMatch({
      path: `/profile/${ids}`,
      exact: true
    });
    console.log(match)

    const {id} = useParams()
    // console.log(id);
    const [userData,setUserdata] = useState(null);
    const [post,setPost] = useState(null)

    useEffect(()=>{
      database.users.doc(id).onSnapshot((snap)=>{
        setUserdata(snap.data())
      })
    },[id])
    useEffect(async()=>{
      if(userData!=null){
        let parr = [];
        for(let i=0;i<userData.postIds.length;i++){
            let postData = database.users.doc(userData.postIds[i]).get();
            parr.push(postData.data())
        }
        setPost(parr);
      }
    })

    return (
      <>
        {
          post==null || userData==null ? 
            <CircularProgress color="secondary" />
          :
            <div>

            </div>
        }
      </>
    )
}

export default Profile