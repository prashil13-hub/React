import React,{useContext,useEffect,useState} from 'react'
import {AuthContext} from '../Context/AuthContext'
import { database } from '../firebase';
import UploadFile from './UploadFile';
import Post from './Post';
import Navbar from './Navbar';

function Feed() {
  const {user,logout} = useContext(AuthContext);
  // console.log(user)
  const [userData,setUserData] = useState('');
  useEffect(()=>{
    const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
      setUserData(snapshot.data())
    })
    return ()=>{unsub()}
  },[user])
  return (
    <>
      <Navbar userData={userData}/>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
        {/* <div style={{width:'50%'}}>
          <h2>Uplaod file</h2>
          <button onClick={logout}>Logout</button>
        </div> */}
        <UploadFile user={userData} />
        <Post userData={userData}/>
      </div>
    </>
  )
}

export default Feed