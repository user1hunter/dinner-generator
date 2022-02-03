import React, { useEffect, useState } from "react"

export const DinnersList = () => {
  const [dinners, setDinners] = useState([])

  useEffect(() => {
    fetch("http://localhost:8088/dinners?expand_userId")
      .then((res) => res.json())
      .then((data) => {
        setDinners(data);
      });
  }, [])

  const getDinners = () => {
    fetch("http://localhost:8088/dinners")
      .then(res => res.json())
      .then((data) => {
        setDinners(data)
      })
  }

  const deleteDinner = (id) => {
    fetch(`http://localhost:8088/dinners/${id}`, {
      method: "DELETE"
    }).then(() => getDinners())
  }

  return (
    <>
      <h1>Your Dinner Choices</h1>
        <div className="dinners">
          <ul>
            {dinners.map((dinner) => <div key={`dinner--${dinner.id}`}>{dinner.name}
              <button key={dinner.id} onClick={() => {deleteDinner(dinner.id)}}>Delete</button>
            </div>)}
          </ul>
        </div>
    </>
  )
}