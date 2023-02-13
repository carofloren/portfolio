import React from 'react'
import "./home.css"
import flor from "../../assets/flor.png"
export const Home = () => {
  return (
    <div className='home' id="home">
     <div className='info-home'>
      <h2>Hola, soy Florencia Caro!</h2>
        <h2>Frontend Developer, disfruto estar en constante crecimiento y autosuperacion, me encantan los nuevos retos!</h2>
        </div>
        <div className='imagen-home'>
          <img src={flor} alt='imagen persona'/>
        </div>


    </div>
  )
}
