import React, { Children } from 'react'
import NavbarComponent from '../components/NavbarComponent/NavbarComponent'


const MainLayout = ({children,title}) => {
    return (

        <div className='mainLayoutContainer'>
            <header className="navContainer">
                <NavbarComponent />
                <h1>{title}</h1>
            </header>

            <main className="itemListContainer">
                {children }
            </main>

            <footer>
                <p>esto es el footer</p>
            </footer>
        </div>
    )
}

export default MainLayout