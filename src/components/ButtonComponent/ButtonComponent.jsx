import React from 'react'
import "./ButtonComponent.css"

const ButtonComponent = ( props ) => {

console.log(props)

  return (
    <div className='btnContainer'><button className="btn boton" id="button" > {props.label} </button></div>
  )
}

export default ButtonComponent