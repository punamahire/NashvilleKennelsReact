import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import the components we will need
import { CustomerCard } from './CustomerCard';
import { getAllCustomers, getCustomerById, deleteCustomer } from '../../modules/CustomerManager';

export const CustomerList = () => {
  // The initial state is an empty array
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  const getCustomers = () => {
    // After the data comes back from the API, we
    // use the setcustomers function to update state
    return getAllCustomers().then(customersFromAPI => {
      setCustomers(customersFromAPI)
    });
  };

  const handleDeleteCustomer = id => {
    deleteCustomer(id)
    .then(() => getAllCustomers().then(setCustomers));
  };

  // got the customers from the API on the component's first render
  useEffect(() => {
    getCustomers();
  }, []);

  // Finally we use .map() to "loop over" the customers array to show a list of customer cards
  return (
  <>
    <section className="section-content">
      <button type="button"
          className="btn"
          onClick={() => {navigate("/customers/create")}}>
          Add Owner
      </button>
    </section>
    <div className="container-cards">
      {customers.map(customer => 
      <CustomerCard 
        key={customer.id} 
        singleCustomer={customer} 
        handleDeleteCustomer={handleDeleteCustomer} />) }
    </div>
  </>
  );
};