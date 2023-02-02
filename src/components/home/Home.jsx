import React from 'react'
import "./home.css"
import flor from "../../assets/flor.png"
export const Home = () => {
  return (
    <div className='home' id="home">
     <div className='info-home'>
      <h2>Hola, soy Florencia Caro!</h2>
        <h2>Full Stack Developer</h2>
        </div>
        <div className='imagen-home'>
          <img src={flor} alt='imagen persona'/>
        </div>


    </div>
  )
}
