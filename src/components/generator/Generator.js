import React, { useEffect, useState } from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./Generator.css"

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
    const len = dinners.length;
    const randomNumber = Math.floor(Math.random()*len)
    const test = (dinners[randomNumber])
    setOption(test)
  }

  return (
    <>
      <div className="generator">
        <h1 className="generator--header">Generate Your Dinner</h1>
        <div className="generator--recommendation" key={`dinner--${dinners.id}`}>
          Your recommended dinner is: {option.name}
        </div>
        <div className="generator--button">
          <button className="generator--button--form" onClick={() => {generateDinner()}}>Generate Dinner</button>
        </div>
      </div>
    </>
  )
}