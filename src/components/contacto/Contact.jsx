import React from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import './contact.css';
export const Contact = () => {
  const info = [
    {
      enlace: 'mailto: florcaro621@gmail.com',
      icono: SiGmail,
      tipo: 'Gmail',
      className: 'icon',
    },
    {
      enlace: 'https://github.com/carofloren',
      icono: BsGithub,
      tipo: 'Github',
      className: 'icon',
    },
    {
      enlace: 'https://www.linkedin.com/in/florenciabancocaro/',
      icono: BsLinkedin,
      tipo: 'Linkedin',
      className: 'icon',
    },
  ];
  return (
    <div id='contact' className='contacto-info'>
      <h3>CONTACTAME</h3>
      <h2>TRABAJEMOS JUNTOS</h2>
      <div className='contenedor-contacto'>
        {info &&
          info.map((el) => (
            <div className='contenedor-icon'>
              <a href={el.enlace} target='_blank'>
                <el.icono className={el.className} />
                <h3>{el.tipo}</h3>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};
