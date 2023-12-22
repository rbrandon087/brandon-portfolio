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
                <li>
                    <NavLink to="/projects" end>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills" end>
                        Skils
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/education" end>
                        Education
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;