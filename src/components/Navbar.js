import React from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        
        {/* <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul> */}

        <ul>
            <li>
                <NavLink to='/' style={ ({isActive}) => { return { backgroundColor: isActive ? 'green' : ''}} }>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' style={ ({isActive}) => { return { backgroundColor: isActive ? 'green' : ''}} }>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' style={ ({isActive}) => { return { backgroundColor: isActive ? 'green' : ''}} }>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard' style={ ({isActive}) => { return { backgroundColor: isActive ? 'green' : ''}} }>Dashboard</NavLink>
            </li>
        </ul>
        
    </nav>
  )
}
