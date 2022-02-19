import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../../modules/EmployeeManager';
import './EmployeeForm.css'

export const EmployeeForm = () => {

	const [employee, setEmployee] = useState({
		name: "",
		breed: "",
		locationId: 0,
		employeeId: 0
	});

	const [isLoading, setIsLoading] = useState(false);

	const [locations, setLocations] = useState([]);
	const [employees, setEmployees] = useState([]);

	const navigate = useNavigate();

	const handleControlledInputChange = (event) => {
		const newEmployee = { ...employee }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newEmployee[event.target.id] = selectedVal
		setEmployee(newEmployee)
	}

    useEffect(() => {
	}, []);

     useEffect(() => {
	}, []);


	const handleClickSaveEmployee = (event) => {
		event.preventDefault() 

		const locationId = employee.locationId
		const employeeId = employee.employeeId

		if (locationId === 0 || employeeId === 0) {
			window.alert("Please select a location and a employee")
		} else {
			addEmployee(employee)
				.then(() => navigate("/employees"))
		}
	}

	return (
		<form className="employeeForm">
			<h2 className="employeeForm__title">New employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Employee name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee name" value={employee.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Employee address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee address" value={employee.address} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="employeeId">Employee: </label>
					<select value={employee.employeeId} name="employee" id="employeeId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a Employee </option>
						{employees.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Save Employee
          </button>
		</form>
	)
};