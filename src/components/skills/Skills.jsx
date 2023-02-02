import React from 'react'
import "./skills.css"
import { node,
  redux,
  typescript,
  postman,
  javascript,
  git,
  express,
  html, css,
react} from '../../assets/skills'
export const Skills = () => {

  return (
    <div id="skills" className='center margin skills'>
      <h2>
       MIS HABLIDADES:
      </h2>
      <div className='contenedor-skills'>
        <img src={html} alt='image de html'/>
        <img src={css} alt='image de css'/>
        <img src={javascript} alt='image de javascript'/>
        <img src={typescript} alt='image de typescript'/>
        <img src={react} alt='image de react'/>
        <img src={redux} alt='image de redux'/>
        <img src={node} alt='image de node'/>
        <img src={git} alt='image de git'/>

      </div>
  

      </div>
  )
}
