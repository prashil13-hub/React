import React,{useState} from 'react'
import { storage } from '../firebase'

function Firestore() {
    const [file,setFile] = useState('');

    // User should be loged in while uplading files
    let uploadImg=()=>{
        // fn1 => run when there is progress or state change
        // fn2 => run when there is error
        // fn2 => runs when task get completed
        const uploadTask = storage.ref(`/data/${file.name}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3);
        function fn1(snapshot){
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log(`Upload is ${progress} done.`)
        }
        function fn2(error){
            console.log('error',error)
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
            })
        }
    }
    return (
        <div>
            <label htmlFor='file'></label>
            <input id='file' type="file" accept="image/*" onChange={(e)=>setFile(e.target.files[0])}/>
            <button onClick={uploadImg}>Upload</button>
        </div>
    )
}

export default Firestore