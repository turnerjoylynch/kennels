import React from "react"
import "./Employee.css"
import "../../modules/EmployeeManager"


export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/dog.svg'} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-employeename">
            {employee.name}
          </span></h3>
          <p>Location: {employee.locationId}</p> 
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
        </div>
      </div>
    );
  }  

// Question: How do I relate the location__id class to the object of Location from the LocationCard?