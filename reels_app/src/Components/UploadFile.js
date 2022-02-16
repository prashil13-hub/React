import React,{useState} from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearProgress from '@mui/material/LinearProgress';
import {v4 as uuidv4} from 'uuid'
import { database,storage } from '../firebase';

function UploadFile(props) {
    // console.log(props.user)
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);

    const handleChange = async(file) =>{
        if(file==null){
            setError("Please select file first");
            setTimeout(()=>{
                setError("");
            },2000)
            return;
        }
        if(file.size/(1024*1024)>100){             //file size is in bytes, 1024*1024==1MB
            setError("This video is very big");
            setTimeout(()=>{
                setError("");
            },2000)
            return;
        }     

        let uid = uuidv4();
        setLoading(true);
        const uploadTask = storage.ref(`/posts/${uid}/${file.name}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3);
        function fn1(snapshot){
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log(`Upload is ${progress} done.`)
        }
        function fn2(error){
            setError(error);
            setTimeout(()=>{
                setError('');
            },3000);
            setLoading(false)
            return;
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
                let obj = {
                    likes:[],
                    conments:[],
                    postId:uid,
                    postUrl:url,
                    userName:props.user.fullname,
                    userProfileImg:props.user.profileUrl,
                    userId:props.user.userId,
                    createdAt:database.getTimeStamp(),
                }
                database.posts.add(obj).then(async(ref)=>{           //we can use doc.set also,  as we have  not given unique id so firebase will provide unique id here.
                    let res = await database.users.doc(props.user.userId).update({
                        postIds : props.user.postIds!=null ? [...props.user.postIds,ref.id] : [ref.id]
                    })
                }).then(()=>{
                    setLoading(false)
                }).catch((err)=>{
                    setLoading(false)
                    setError(err);
                    setTimeout(()=>{
                        setError("");
                    },2000)
                })   
            })
        }
    }
  return (
    <div>
        {
            error!=''?<Alert severity="error">T{error}</Alert> :
            <>
                <input type="file" accept='video/*' onChange={(e)=>handleChange(e.target.files[0])} id='upload-input' style={{display:'none'}} />
                <label htmlFor='upload-input'>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        component="span"
                        disabled={loading} 
                        startIcon={<CloudUploadIcon/>}
                    >
                        Upload video
                    </Button>
                </label>
                {loading && <LinearProgress color='secondary' style={{marginTop:'3%'}} />}
            </>
        }
    </div>
  )
}

export default UploadFile