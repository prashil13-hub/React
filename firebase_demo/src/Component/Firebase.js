import React,{useEffect, useState} from 'react'
import { database } from '../firebase';

function Firebase() {
    const[name,setName] = useState('');
    const[age,setAge] = useState('');

    let CreateUserInDatabase=async()=>{
        // Create Commond
        let res=await database.users.add({name,age});
        // let res=await database.users.doc("1111111").set({name,age});
        console.log(res)
    }
    useEffect(async()=>{
        //Read Commands
        let uid = "PD0IQIPsZkawoDpatLsp"
        let data = await database.users.doc(uid).get();   //onSnapshot   
        // console.log(data.data());

        let allData = await database.users.get();
        // allData.forEach((obj)=>console.log(obj.data()));

        // let orderData = await database.users.orderBy('createdAt','desc').get()
    })
    let update = async() =>{
        // Update Command
        let uid = "PD0IQIPsZkawoDpatLsp"
        await database.users.doc(uid).update({
            name,
            age
        })
    }
    let deleteInfo = async()=>{
        let uid = "1111111"
        await database.users.doc(uid).delete();
    }
    return (
        <div>
            {/* <label htmlFor='name'>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor='age'>Age</label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={CreateUserInDatabase}>Create</button> */}

        <label htmlFor='name'>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor='age'>Age</label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={update}>Update</button>
            <button onClick={deleteInfo}>Delete</button>
        </div>
    )
}

export default Firebase