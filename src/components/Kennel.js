import React, {useState} from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

export const Kennel = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)
    const [isLocalAuth, setLocalAuth] = useState(localStorage.getItem("kennel_customer") !== null)

    // session storage
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    // session storage
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    
    // local storage
    const setLocalAuthUser = (user) => {
        localStorage.setItem("kennel_customer", JSON.stringify(user))
        setLocalAuth(localStorage.getItem("kennel_customer") !== null)
    }

    // local storage
    const clearLocalUser = () => {
        localStorage.clear();
        setLocalAuth(localStorage.getItem("kennel_customer") !== null)
    }
    
    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} clearLocalUser={clearLocalUser} isLocalAuth={isLocalAuth} />
            <ApplicationViews 
                setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
            />
        </>
    ) 
}
