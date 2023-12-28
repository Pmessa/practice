import React from 'react'
import "./ButtonComponent.css"

const ButtonComponent = ( {className, label, onClickFunction} ) => {



  return (
    <div className='btnContainer'><button className={className} id="button" onClick={onClickFunction}> {label} </button></div>
  )
}

export default ButtonComponent