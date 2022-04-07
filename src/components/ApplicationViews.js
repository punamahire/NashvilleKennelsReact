import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './animal/AnimalList'
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { LocationList } from "./location/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />                

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />

                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={<LocationList />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList />} />

            </Routes>
        </>
    )
}