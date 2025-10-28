import React from 'react'
import { useLoaderData } from 'react-router-dom'

function RecipeItems() {

const allRecipes=useLoaderData()



  return (
    <div>RecipeItems</div>
  )
}

export default RecipeItems