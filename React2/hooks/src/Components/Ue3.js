import React,{useState,useEffect} from 'react'

function Ue3() {

    const[count,setCount] = useState(0);
    const[text,setText] = useState({msg:''});
    useEffect(()=>{
        console.log('useEffect') 
    },[count])  // use effect will run only when change in count happen, if change in input happens it will not run

    let changeText=(e)=>{
        // text.msg=e.target.value;
        // console.log(text);

        // text.msg=e.target.value;
        // setText(text);
        // console.log(text);

        // Note :- Our objects are created at heap, so if we want know the changes to react then we have to give new adress otherwise he will think that adress is not changing means no change happen, so in case of object and array use 'spread operator'

        text.msg=e.target.value;
        setText({...text});
        console.log(text);
    }

    console.log('render')
    return (
        <div>
            <h1>Current count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <input type="text" value={text.msg} onChange={(e)=>changeText(e)}/>
        </div>
    )
}

export default Ue3