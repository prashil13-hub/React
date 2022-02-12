import React,{useState,useEffect} from 'react'

function Ue1() {
    const[count,setCount] = useState(0);

    useEffect(()=>{
        // side effect vala work

        console.log('useEffect')    // it is woring as compomentDidMount + componentDidUpdate
    },)
    console.log('render')
    return (
        <div>
            <h1>Current count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}

export default Ue1;