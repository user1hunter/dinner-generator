import React, { useEffect, useState } from "react"

export const GenerateDinner = () => {
  const [dinner, setDinners] = useState([])
  const [option, setOptions] = useState([])

  useEffect(() => {
    fetch("http://localhost:8088/dinners?expand_userId")
      .then((res) => res.json())
      .then((data) => {
        setDinners(data);
      });
  }, [])

  useEffect(() => {
    fetch("http://localhost:8088/dinners?expand_userId")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  }, [])
  
  const generateDinner = () => {
    const len = dinner.length;
    setOptions(option[Math.floor(Math.random()*len)])
  }

  return (
    <>
      <h1>Generate Your Dinner</h1>
      <div className="generator--recommendation" key={`dinner--${dinner.id}`}>
        Your recommended dinner is: {option.name}
      </div>
      <div className="generator--button">
        <button key={`button--${dinner.id}`} onClick={() => {generateDinner()}}>Generate Dinner</button>
      </div>
    </>
  )
  
}