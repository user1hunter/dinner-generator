import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

export const CreateDinners = () => {
  const [dinner, setDinners] = useState([])
  const [category, setCategories] = useState([])
  const history = useHistory()
  const { getCurrentUser } = useSimpleAuth()

  useEffect(() => {
    fetch("http://localhost:8088/dinnerCategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [])

  const createDinner = () => {
    const newDinner = {
      name: dinner.name,
      userId: getCurrentUser().id,
      dinnerCategoryId: parseInt(dinner.dinnerCategoryId),
    }

    fetch("http://localhost:8088/dinners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDinner),
    })
      .then((res) => res.json())
      .then(() => history.push("/choices"));
    }
  
  return (
    <>
      <h1>Add a New Dinner</h1>
      <div className="dinner--name">
        <label htmlFor="dinner--name--form">Name of Dinner</label>
          <input  onChange={(event) => {
        const copy = {...dinner}
        copy.name = event.target.value
        setDinners(copy)}}
                        type="text"
                        required
                        autoFocus
                        className="form--control"
                        placeholder="Dinner name"
            />
        
      </div>
      <div className="dinner--category">
        <label htmlFor="dinner--category--form">Dinner Category</label>
            <select id=".category" onChange={(event) => {
              const copy = {...dinner}
              copy.dinnerCategoryId = event.target.value
              setDinners(copy)}}
              defaultValue=""
              name="category"
              className="form--control">
                <option value="0">Select a Category</option>
                {category.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.type}
                  </option>
                ))}
            </select>
      </div>
      <div className="dinner--submit">
      <button onClick={() => {
          createDinner();
        }}
        >Submit New Dinner</button>
      </div>
    </>
  )
      }
