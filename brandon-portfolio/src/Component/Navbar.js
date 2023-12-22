import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar =  () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;