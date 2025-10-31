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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,288L18.5,250.7C36.9,213,74,139,111,117.3C147.7,96,185,128,222,160C258.5,192,295,224,332,224C369.2,224,406,192,443,197.3C480,203,517,245,554,229.3C590.8,213,628,139,665,133.3C701.5,128,738,192,775,224C812.3,256,849,256,886,250.7C923.1,245,960,235,997,202.7C1033.8,171,1071,117,1108,133.3C1144.6,149,1182,235,1218,224C1255.4,213,1292,107,1329,96C1366.2,85,1403,171,1422,213.3L1440,256L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
        </div>
        <div className='recipe'>
          <RecipeItems/>
        </div>
      </section>
      <Footer />
     
    </>
  )
}
