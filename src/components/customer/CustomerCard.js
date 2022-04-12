import React from "react"
import { Link } from "react-router-dom";
import "./Customer.css"

export const CustomerCard = ({singleCustomer, handleDeleteCustomer}) => (
    <section className="customer">
        <h3 className="customer__name">{singleCustomer.name}</h3>
        <div className="customer__address">{singleCustomer.address}</div>
        {/* <div className="customer__pet">Pet: {singleCustomer.animals[0].name}</div> */}
        <Link to={`/customers/${singleCustomer.id}/edit`}>
            <button>Edit</button>
        </Link>
        <button type="button" onClick={() => handleDeleteCustomer(singleCustomer.id)}>Remove Customer</button>
    </section>
)