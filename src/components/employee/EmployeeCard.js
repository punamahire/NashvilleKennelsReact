import React from "react"
import { Link } from "react-router-dom";
import "./Employee.css"

export const EmployeeCard = ({singleEmployee, handleDeleteEmployee}) => (
    <section className="employee">
        <h3 className="employee__name">{singleEmployee.name}</h3>
        <div className="employee__location">{singleEmployee.location.name}, {singleEmployee.location.address}</div>
        <Link to={`/employees/${singleEmployee.id}/edit`}>
            <button>Edit</button>
        </Link>
        <button type="button" onClick={() => handleDeleteEmployee(singleEmployee.id)}>Remove Employee</button>
    </section>
)