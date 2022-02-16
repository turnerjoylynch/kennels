import React from "react"
import "./Customer.css"
import "../../modules/CustomerManager"


export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/dog.svg'} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-customername">
            {customer.name}
          </span></h3>
          <p>Animal: {customer.name}</p> 
          <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
        </div>
      </div>
    );
  }  
  
  // On line 16, I want to create a function like: if animal.customerId=customer.id, return animal.name