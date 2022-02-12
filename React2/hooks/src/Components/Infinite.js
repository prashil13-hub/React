import React,{useState,useEffect} from 'react'

function Infinite() {
    const[count,setCount] = useState(0);   // count value will be store in stack

    useEffect(()=>{
        console.log('useEffect');
        // setCount(100);    // as in next part use count in not changing so it will not go in infinite loop
        let num = Math.random()*100;
        // setCount(num);    // an in this case value is not same as previous or value is changing then it will go in infinite loop

        // Note :- if use effect is of the type componentDidUpdate then we will not do setState there otherwise it will go in infinite loop
    })
    console.log('render')
    return (
        <div>
            <h1>Current count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}

export default Infinite