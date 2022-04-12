import React, { useState, useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom"
import "./Login.css"

export const Login = ({setAuthUser, setAuth}) => {
    const email = useRef()
    const existDialog = useRef()
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useState("")

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        console.log("isChecked", isChecked)
    };

    const existingUserCheck = () => {
        return fetch(`http://localhost:5002/customers?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    if (isChecked) {
                        // set component state
                        setUser(exists) 
                        // set isAuthenticated to true allowing user 
                        // to access animals, employees and customers info
                        setAuth(true)   
                        // set local storage 
                        localStorage.setItem("kennel_customer", JSON.stringify(exists));
                        console.log(user)
                    } else {
                        // set session storage
                        setAuthUser(exists)
                    }
                    navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            {console.log("inside Login.js")}
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Nashville Kennels</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                    <fieldset>
                        <input id="rem--me--checkbox" name="rem--checkbox" type="checkbox" 
                                checked={isChecked}
                                onChange={handleOnChange}
                        /> 
                        <label htmlFor="rem--checkbox">Remember Me</label>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

