import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const style = { textDecoration: 'none', display: 'inline-block', color: 'red', fontWeight: 'bold', margin: '0 10px', paddingBottom: "15px", borderBottom: "2px solid currentColor" }
    return (
        <nav>
            <NavLink style={{ textDecoration: "none" }} activeStyle={style} to="/home" activeClassName="selected">Home</NavLink>
            <NavLink style={{ textDecoration: "none" }} activeStyle={style} to="/about">About</NavLink>
            <NavLink style={{ textDecoration: "none" }} activeStyle={style} to="/friends">Friends</NavLink>
        </nav>
    )
}

export default Header
