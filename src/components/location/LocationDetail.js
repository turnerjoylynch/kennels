import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getLocationById, deleteLocation } from "../../modules/LocationManager";
import "./LocationDetail.css";

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getlocationById(id) from locationManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation(location);
        setIsLoading(false);
      });
  }, [locationId]);

  const handleDelete = () => {
    //invoke the delete function in locationManger and re-direct to the location list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      navigate("/locations")
    );
  };

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close Location
        </button>
    </section>
  );
};