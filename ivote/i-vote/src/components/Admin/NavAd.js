import React from "react";
import { NavLink } from "react-router-dom";
const NavAd = () => (
    <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/admin/addvoting" exact>
                    Add a vote
                </NavLink>
                <NavLink className="nav-link" to="/admin/votinglist" exact>
                    Voting List
                </NavLink>
                <NavLink className="nav-link" to="/admin/votinglist" exact>
                    View Result
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavAd;
