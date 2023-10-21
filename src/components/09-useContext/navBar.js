import React from 'react'
import {Link} from "react-router-dom";

export const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link  to="/" className="navbar-brand">Home</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link disabled" aria-current="page">Home Screen</Link>
                        <Link to="/login" className="nav-link">Login Screen</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/nothing-here" className="nav-link">Nothing Here</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>

}
