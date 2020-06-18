import React from "react";
import { NavLink } from "react-router-dom";
const NavAd = () => (
    <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/admin" exact>
                    Add a voting
                </NavLink>
                <NavLink className="nav-link" to="/admin" exact>
                    Voting List
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavAd;
