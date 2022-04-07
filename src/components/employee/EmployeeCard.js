import React from "react"
import "./Employee.css"

export const EmployeeCard = ({singleEmployee}) => (
    <section className="employee">
        <h3 className="employee__name">{singleEmployee.name}</h3>
        <div className="employee__location">{singleEmployee.location.name} {singleEmployee.location.address}</div>
    </section>
)