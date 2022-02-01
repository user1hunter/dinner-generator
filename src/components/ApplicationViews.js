import React from "react"
import { Route } from "react-router-dom"
import { CreateDinners } from "./dinner/CreateDinners"
import { DinnerHome } from "./dinner/DinnerHome"
import { DinnersList } from "./dinner/DinnersList"
import { GenerateDinner } from "./generator/Generator"


export const ApplicationViews = () => {
  return (
    <>
      <Route path="/home">
        <DinnerHome />
      </Route>

      <Route path="/choices">
        <DinnersList />
      </Route>

      <Route path="/create">
        <CreateDinners />
      </Route>

      <Route path="/generator">
        <GenerateDinner />
      </Route>
    </>
  )
}