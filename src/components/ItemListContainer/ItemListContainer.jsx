import React from 'react'
import CountComponent from '../CountComponent/CountComponent'
import './ItemlistContainer.css'
CountComponent

const ItemListContainer = ({greeting}) => {
  return (
    <div className="itemConteinerDiv">

      <div>
          {greeting}
      </div>
    </div>
    )

}

export default ItemListContainer