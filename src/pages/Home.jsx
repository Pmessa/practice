import React from 'react'
import './Home.css'


import NavbarComponent from '../components/NavbarComponent/NavbarComponent'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'




const Home = () => {


    return (
        <div>
            <nav>
                <NavbarComponent />
            </nav>

            <ItemListContainer />

        </div>
    )
}

export default Home