import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <navbar>
            <span className='logo_nav'>#VANLIFE</span>
            <ul className='menu_nav'>
                <li><Link className='item_menu' to="#">About</Link></li>
                <li><Link className='item_menu' to="#">Vans</Link></li>
            </ul>
        </navbar>
    )
}

export default Navbar