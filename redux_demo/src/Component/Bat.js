import React,{useState} from 'react'
import {connect} from 'react-redux'

function Bat(props) {
    // const [bat,setBat] = useState(20);   //bat value is local to the component

    // console.log(props)     // {bats: 20, dispatch: ƒ}
    // console.log(props.batsss)   // 20
    return (
        <div>
            {/* <h1>Bats : {bat}</h1>
            <button onClick={()=>setBat(bat-1)}>Buy Bat</button> */}


            <h1>Bats : {props.batsss}</h1>
            <button onClick={props.buyBat}>Buy Bat</button>

        </div>
    )
}

const mapStateToProps = (state) =>{   // jab bhi hame component me value chahiye from global store to ham mapStateToProps y function use karenge
    return{
        // batsss: state.bats
        batsss: state.bat.bats
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyBat : ()=>dispatch({type:'BUY_BAT'})   // dispatch hamare action ko reducer tak leke jata hai.
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat)    //connect mapStateToProps ko state lake deta hai or mapDispatchToProps ko props lake deta hai