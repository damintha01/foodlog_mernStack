import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodRecipe from '../assets/foodRecipe.png'

function RecipeItems() {

const allRecipes=useLoaderData()
console.log(allRecipes);



  return (
    <div className='card-container'>
     {
      allRecipes?.map((item,index)=>{
        return(
          <div className='card' key={index}>
            <img src={item.coverImage || foodRecipe} alt={item.title} width="300px" height="200px" />
            <div>
              <h3>{item.title}</h3>
              <p>Ingredients: {item.ingredients.join(", ")}</p>
              <p>Instructions: {item.instructions}</p>
              <p>Time Required: {item.time}</p>
            </div>
          </div>
        )
      })
     }
    </div>
  )
}

export default RecipeItems