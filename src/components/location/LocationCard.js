import React from "react"
import { Link } from "react-router-dom";
import "./Location.css"
import "../../modules/LocationManager"


export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/dog.svg'} alt="My Dog" />
          </picture>
          <h3>Location: <span className="card-locationname">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p> 
          <Link to={`/locations/${location.id}`}>
            <button>Details</button>
          </Link>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Delete</button>
        </div>
      </div>
    );
  } 