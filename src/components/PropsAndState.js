import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy

    // below is shorthand for setting the state of the clicks... writing "setState" or "set" writes the function for you
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }



  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}