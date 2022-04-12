import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ( { clearUser, isAuthenticated, clearLocalUser, isLocalAuth } ) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        if (localStorage.getItem("kennel_customer") !== null) {
            clearLocalUser()
        } 
        clearUser();
        navigate('/');
    }

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            {(isLocalAuth || isAuthenticated) && <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>}
            {(isLocalAuth || isAuthenticated) && <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>}
            {(isLocalAuth || isAuthenticated) && <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>}
            {(isLocalAuth || isAuthenticated)
                ? <li className="navbar__item">
                    <span className="navbar__link__logout" onClick={handleLogout}> Logout </span>
                  </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                  </li>}
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">About</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/careers">Careers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/madlib">MadLib</Link>
            </li>
        </ul>
    )
}