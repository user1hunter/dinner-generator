import React, { useEffect, useState } from "react"

export const DinnersList = () => {
  const [dinners, setDinners] = useState([])
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [])

  useEffect(() => {
    fetch("http://localhost:8088/dinners?expand_userId")
      .then((res) => res.json())
      .then((data) => {
        setDinners(data);
      });
  }, [])

  const deleteDinner = (id) => {
    fetch(`http://localhost:8088/dinners/${id}`, {
      method: "DELETE"
    }).then(() => setDinners())
  }

  const userDinners = dinners.filter((dinner) => dinner.userId === users.id);

//Still need to populate the page with list of user specific dinners

  return (
    <>
      <h1>Your Dinner Choices</h1>
        <div className="dinners">
          {userDinners.map(dinner => <div key={dinner.dinner.id}>{dinner.dinner.id}</div>)}
          <button key={dinners.id} onClick={() => {deleteDinner(dinners.id)}}>Delete</button>
        </div>
    </>
  )

}