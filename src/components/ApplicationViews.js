import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './animal/AnimalList.js'
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from './animal/AnimalForm'
import { LocationForm } from './location/LocationForm'



export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />

                // Locations Routes
                <Route exact path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />

                // Animals Routes
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />

                // Customer Routes
                <Route path="/customers" element={<CustomerList />} />
                
                // Employee Routes
                <Route path="/employees" element={<EmployeeList />} />

            </Routes>
        </>
    )
}

{/* Make sure you add the `exact` attribute here */}


{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
