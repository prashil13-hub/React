import React,{useEffect, useState} from 'react'
import {auth} from '../firebase'

function FireAuth() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');

    let create = async() =>{
        let res = await auth.createUserWithEmailAndPassword(email,password)
        console.log(res)
    }
    useEffect(()=>{
        let unsub=auth.onAuthStateChanged((user)=>{
            setUser(user);
        })
        return ()=>{
            unsub();    //cleanup
        }
    },[])
    let logout = async()=>{
        await auth.signOut();
    }
    let signin = async()=>{
        await auth.signInWithEmailAndPassword(email,password);
    }
    return (
        <>
            {
                user==null? 

                // <div>
                //     <label htmlFor="emial">Email</label>
                //     <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                //     <label htmlFor="password">Password</label>
                //     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                //     <button onClick={create}>Create new user</button>
                // </div>

                <div>
                    <label htmlFor="emial">Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button onClick={signin}>Sign In</button>
                </div>
                :
                <div>
                    {user.email}
                    <button onClick={logout}>Logout</button>
                </div>
            }
        </>
    )
}

export default FireAuth