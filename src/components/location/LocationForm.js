import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addLocation } from '../../modules/LocationManager';
import './LocationForm.css'

export const LocationForm = () => {

	const [location, setLocation] = useState({
		name: "",
		address: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	const [locations, setLocations] = useState([]);

	const navigate = useNavigate();

	const handleControlledInputChange = (event) => {
		const newLocation = { ...location }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newLocation[event.target.id] = selectedVal
		setLocation(newLocation)
	}

	const handleClickSaveLocation = (event) => {
		event.preventDefault() 

		const locationId = location.locationId

		addlocation(location)
			.then(() => navigate("/locations"))
	}

	return (
		<form className="locationForm">
			<h2 className="locationForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Location name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location name" value={location.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Location address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location address" value={location.address} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="locationId">location: </label>
					<select value={location.locationId} name="location" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a Location </option>
						{locations.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveLocation}>
				Save Location
          </button>
		</form>
	)
};