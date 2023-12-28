import React from 'react'
import {useState} from  'react'
import "./CountComponent.css"
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const CountComponent = () => {
    const [count, setCount] = useState(0)
    console.log(count)
   
    const incrememtar = () => setCount(count +1);
   
    const decrementar = () => {  
        if(count > 0 ){
        setCount(count -1)
        }
    }
  return (

    <div className="contadorContainer">
    <h1>Contador</h1>
    <div className="number"><h2>{count}</h2></div>
    <ButtonComponent label="incrementar" className="blue botn" onClickFunction={incrememtar}/>
    <br />
    <ButtonComponent label="decrementar" className="green botn" onClickFunction={decrementar}/>
    </div>  
   
  )
}

export default CountComponent