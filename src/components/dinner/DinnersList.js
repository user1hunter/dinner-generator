import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

export const DinnersList = () => {
  const [dinners, setDinners] = useState([])
  const history = useHistory()
  const { getCurrentUser } = useSimpleAuth()

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

  const createDinners = () => {
    history.push("/create")
  };

  const userId = getCurrentUser().id

  return (
    <>
      <h1>Your Dinner Choices</h1>
        <div className="dinners">
          <ul>
            {dinners.filter(dinner => dinner.userId === userId).map((dinner) => <div key={`dinner--${dinner.id}`}>
            {dinner.name}
              <button key={dinner.id} onClick={() => {deleteDinner(dinner.id)}}>Delete</button>
            </div>)}
          </ul>
          <button onClick={() => {
          createDinners();
        }}
        >Add New Dinner</button>
        </div>
    </>
  )
}