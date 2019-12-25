import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <Menu fixed='top'>
            <NavLink exact className='item' to='/' >
                FLELP
            </NavLink>
            <NavLink className='item' to='/login' >
                Login
            </NavLink>
            <NavLink className='item' to='/signup'>
                Signup
            </NavLink>
        </Menu>
    )
}

export default Navbar