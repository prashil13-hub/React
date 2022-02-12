import React,{useState,useEffect} from 'react'

function Ue2() {
    const[count,setCount] = useState(0);

    useEffect(()=>{
        console.log('useEffect')    // working as componentDidMount only
    },[])
    console.log('render')
    return (
        <div>
            <h1>Current count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}

export default Ue2