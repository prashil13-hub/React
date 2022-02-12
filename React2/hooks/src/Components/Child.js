import React from 'react'

function Child({theme}) {
    console.log("Child called");
  return (
    // <div className={theme?"dark":"light"}>Child component</div>
    <div>Child component</div>
  )
}

export default React.memo(Child)