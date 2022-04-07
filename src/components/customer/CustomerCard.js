import React from "react"
import "./Customer.css"

export const CustomerCard = ({singleCustomer}) => (
    <section className="customer">
        <h3 className="customer__name">{singleCustomer.name}</h3>
        <div className="customer__address">{singleCustomer.address}</div>
        <div className="customer__pet">Pet: {singleCustomer.animals[0].name}</div>
    </section>
)