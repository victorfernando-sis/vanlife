import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <span className='logo_nav' onClick={() => navigate('/')}>#VANLIFE</span>
            <ul className='menu_nav'>
                <li><Link className='item_menu' to="/about">About</Link></li>
                <li><Link className='item_menu' to="/vans">Vans</Link></li>
            </ul>
        </div>
    )
}

export default Navbar