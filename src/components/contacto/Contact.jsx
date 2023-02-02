import React from 'react'
import {ImWhatsapp} from "react-icons/im"
import{BsLinkedin, BsGithub} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import "./contact.css"
export const Contact = () => {
  return (
    
    <div id="contact" className='contacto-info'>
     <h3>CONTACTAME</h3>
     <h2>TRABAJEMOS JUNTOS</h2>
     <div className='contenedor-contacto'>

     <div>
     
      <a href="mailto: florcaro621@gmail.com" target='_blank'>
      <SiGmail className='icon'/>
      <h3>Correo</h3>
      </a>
     </div>
     <div>
     
      <a href="https://github.com/carofloren" target='_blank'>
      <BsGithub className='icon'/>
      <h3>Github</h3>
      </a>
     </div>
     <div>
      <a href="https://www.linkedin.com/in/florenciabancocaro/" target='_blank'>
      <BsLinkedin className='icon'/>
      <h3>Linkedin</h3>

      </a>
     </div>
      </div>
      </div>
  )
}
