import React from "react";
import { NavLink } from "react-router-dom";
const NavVoter = () => (
    <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/voter" exact>
                    Voting List
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavVoter;
