import React,{useState} from 'react'


// Us=UseState
function Us() {
  const [count,setCount] = useState(0);   // useState is used for defining states in functional compomnet
  const [obj,setObj] = useState({msg:'hey'})
  return (
    <div>
      <h1>Current Count {count}</h1>
      <button onClick={()=>setCount(count+1)}>+1</button>
      
      <h3>{obj.msg}</h3>
    </div>
  )
}

export default Us;