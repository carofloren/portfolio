import React from 'react'
import "./proyect.css"
import {AiOutlineGlobal} from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import proyect2 from '../../assets/proyect2.png'
export const Proyect = () => {
  return (
    <div id="project" className='center proyect'>
    <h2>Mis Proyectos</h2>
    <div className='contenedor-proyects'>
      <div className='card-proyect'>
        <h2>E-commerce</h2>
        <h3>KingComm</h3>
        <img src={proyect2} alt='img de proyect'/>
        <div className='proyect-muestra'>
          <div className='enlace'>
        <BsGithub className="icon"/>
        <a href="https://github.com/carofloren/KingComm">Github</a>
        </div>
        <div className='enlace'>
        <AiOutlineGlobal className="icon"/>
        <a href="https://kingcomm.vercel.app/">Web</a>
        </div>
        </div>
        <div>
          <span>React</span>
          <span>Redux Toolkit</span>
          <span>TypeScript</span>
          <span>Firebase</span>

        </div>
      </div>
      <div className='card-proyect'>
          <h2>App de Paises</h2>
          <h3>The Word</h3>
          <img />
      <div className='proyect-muestra'>
          <div className='enlace'>
        <BsGithub className="icon"/>
        <a href="https://github.com/carofloren/countries">Github</a>
        </div>
        <div className='enlace'>
        <AiOutlineGlobal className="icon" />
        <a href="">Web</a>
        </div>
        </div>
        <div >
          <span>React</span>
          <span>Redux</span>
          <span>Node js</span>
          <span>Express js</span>
          </div>
      </div>
    </div>

    </div>
  )
}
