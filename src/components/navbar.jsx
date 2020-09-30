import React, { Component } from 'react';

// stateless Functional Component

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            {/* NavBar{""} */}
            <span className="badge badge-pill badge-secondary">
                {totalCounters}
            </span>

        </nav>
    );
}




export default NavBar;