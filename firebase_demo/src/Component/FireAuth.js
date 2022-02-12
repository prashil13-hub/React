import React,{useState} from 'react'
import {auth} from '../firebase'

function FireAuth() {
    const {email,setEmail} = useState('');
    const {password,setPassword} = useState('');
    const {user,setUser} = useState('');

    let create = async() =>{
        let res = await auth.createUserWithEmailAndPassword(email,password);
        console.log(res)
    }
    return (
        <>
            <label htmlFor="email">Email</label>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={create}>Create</button>
        </>
    )
}

export default FireAuth