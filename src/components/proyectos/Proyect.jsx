import React from 'react';
import './proyect.css';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import proyect1 from '../../assets/proyecto1.png';
import proyect2 from '../../assets/proyecto2.png';
import proyect3 from '../../assets/proyecto3.png';

export const Proyect = () => {
  const proyectos = [
    {
      titulo: 'E-commerce',
      nombre: 'KingComm',
      imagen: proyect1,
      textoImg: 'img_proyecto',
      iconoGithub: BsGithub,
      github: 'https://github.com/carofloren/KingComm',
      iconoWeb: AiOutlineGlobal,
      web: 'https://kingcomm.vercel.app/',
      skills: ['React', 'ReduxToolkit', 'Typescript', 'Firebase'],
    },
    {
      titulo: 'Pacientes ',
      nombre: 'Seguimiento de pacientes',
      imagen: proyect2,
      textoImg: 'img_proyecto',
      iconoGithub: BsGithub,
      github: 'https://github.com/carofloren/citas_react',
      iconoWeb: AiOutlineGlobal,
      web: 'https://administrador-pacientes-rho.vercel.app/',
      skills: ['React', 'Tailwind', 'Local Storage'],
    },
    {
      titulo: 'Cotizador ',
      nombre: 'CryptoCotizador',
      imagen: proyect3,
      textoImg: 'img_proyecto',
      iconoGithub: BsGithub,
      github: 'https://github.com/carofloren/Cotizador-de-Cryptomonedas',
      iconoWeb: AiOutlineGlobal,
      web: 'https://cryptocotizador.vercel.app/',
      skills: ['React', 'Styled Components'],
    },
  ];


  return (
    <div id='project' className='center proyect'>
      <h2>Mis Proyectos</h2>
      <div className='contenedor-proyects'>
        {proyectos.map((el) => (
          <div className='card-proyect'>
            <h2>{el.titulo}</h2>
            <h3>{el.nombre}</h3>
            <div className='imagen'>
            <img className='img-card' src={el.imagen} alt={el.textoImg} />
            </div>
            <div className='proyect-muestra'>
              <div className='enlace'>
                <el.iconoGithub className='icon' />
                <a href={el.github} target="_blank">Github</a>
              </div>
              <div className='enlace'>
                <el.iconoWeb className='icon' />
                <a href={el.web} target="_blank">Web</a>
              </div>
            </div>
            <div>
              {el.skills.map(skill=>(
                <span>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
