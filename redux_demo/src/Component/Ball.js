import React,{useState} from 'react'
import {connect} from 'react-redux'

function Ball({ballsss,buyBall,sellBall}) {
    const [qty,setQty] = useState(1)
    return (
        <div>
            <h1>Balls : {ballsss}</h1>
            <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}/>
            <button onClick={()=>buyBall(qty)}>Buy Ball</button>
            <button onClick={sellBall}>Sell Ball</button>
        </div>
    )
}

const mapStateToProps = (state) =>{ 
    return{
        ballsss: state.ball.balls
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyBall : (qty)=>dispatch({type:'BUY_BALL',payload:qty}),
        sellBall : ()=>dispatch({type:'SELL_BALL'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)