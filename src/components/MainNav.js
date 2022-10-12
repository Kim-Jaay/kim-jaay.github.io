import React from 'react'
import { Link } from 'react-router-dom'
import NAV from '../data/NAV.js'

const MainNav = () => {
    return (
        <ul className="main_nav">{
            NAV.map((it, idx) => {
                return (
                    <li><Link to={it.link}>{it.menu}</Link></li>
                )
            })
        }
        </ul>
    )
}

export default MainNav