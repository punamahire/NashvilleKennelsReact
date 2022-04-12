import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalList } from './animal/AnimalList'
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { LocationList } from "./location/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from './animal/AnimalForm'
import { CustomerForm } from './customer/CustomerForm'
import { MadLib } from "./MadLib"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { About } from "./About.js"
import { Careers } from "./Careers.js"

export const ApplicationViews = ( { isAuthenticated, setIsAuthenticated } ) => {

    const PrivateRoute = ({ children }) => {
        console.log("isAuthenticated", isAuthenticated);
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />     

                {/* Render the login and register when http://localhost:3000/login */}
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} setAuth={setIsAuthenticated} />} />
                <Route exact path="/register" element={<Register />} />           

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={
                    <PrivateRoute>
                        <AnimalList />
                    </PrivateRoute>
                } />

                <Route path="/animals/:animalId/edit" element={
                <PrivateRoute>
                    <AnimalEditForm />
                </PrivateRoute>
                } />

                <Route exact path="/animals/:animalId" element={
                <PrivateRoute>
                    <AnimalDetail />
                </PrivateRoute>
                } />
                
                <Route path="/animals/create" element={<AnimalForm />} />

                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={
                     <PrivateRoute>
                         <LocationList />
                     </PrivateRoute>   
                } />
                <Route path="/locations/:locationId" element={<LocationDetail />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={
                        <PrivateRoute>
                            <CustomerList />
                        </PrivateRoute>
                } />
                <Route path="/customers/create" element={<CustomerForm />} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={
                        <PrivateRoute>
                            <EmployeeList />
                        </PrivateRoute>
                } />

                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />

                <Route path="/madlib" element={<MadLib />} />                 

            </Routes>
        </>
    )
}

