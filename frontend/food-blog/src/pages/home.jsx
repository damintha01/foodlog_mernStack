import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import RecipeItems from '../Components/RecipeItems'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <Navbar />
      <section className='home'>

        <div className='left'>
          <h1>food recipe</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, nostrum?</h5>
          <button>share your recipe</button>
        </div>
        <div className='right'>
          <img src={foodRecipe} width="400px" height="300px" />
        </div>
        <div className='bg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#d4f6e8" fillOpacity="1" d="M0,32L14.1,32C28.2,32,56,32,85,80C112.9,128,141,224,169,266.7C197.6,309,226,299,254,277.3C282.4,256,311,224,339,218.7C367.1,213,395,235,424,218.7C451.8,203,480,149,508,149.3C536.5,149,565,203,593,208C621.2,213,649,171,678,176C705.9,181,734,235,762,250.7C790.6,267,819,245,847,234.7C875.3,224,904,224,932,208C960,192,988,160,1016,165.3C1044.7,171,1073,213,1101,197.3C1129.4,181,1158,107,1186,90.7C1214.1,75,1242,117,1271,154.7C1298.8,192,1327,224,1355,229.3C1383.5,235,1412,213,1426,202.7L1440,192L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path>
          </svg>
        </div>
        <div className='recipe'>
          <RecipeItems/>
        </div>
      </section>
      <Footer />
     
    </>
  )
}
