import React, { useEffect, useState } from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

export const GenerateDinner = () => {
  const [dinners, setDinners] = useState([])
  const [option, setOption] = useState({})
  const { getCurrentUser } = useSimpleAuth()

  useEffect(() => {
    fetch(`http://localhost:8088/dinners?userId=${getCurrentUser().id}`)
      .then((res) => res.json())
      .then((data) => {
        setDinners(data);
      });
  }, [])
  

  const generateDinner = () => {
    const len = dinners.length-1;
    const randomNumber = Math.floor(Math.random()*len)
    const test = (dinners[randomNumber])
    setOption(test)
  }

  return (
    <>
      <h1>Generate Your Dinner</h1>
      <div className="generator--recommendation" key={`dinner--${dinners.id}`}>
        Your recommended dinner is: {option.name}
      </div>
      <div className="generator--button">
        <button onClick={() => {generateDinner()}}>Generate Dinner</button>
      </div>
    </>
  )
}