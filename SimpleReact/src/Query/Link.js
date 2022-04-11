import React from 'react';
import { NavLink } from 'react-router-dom';

const Linkin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/normal">Normal</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/rqpage">Rqpage</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Linkin;