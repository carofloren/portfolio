import React from 'react';
import './skills.css';
import {
  node,
  redux,
  typescript,
  javascript,
  git,
  html,
  css,
  react,
} from '../../assets/skills';
export const Skills = () => {
  const info = [
    {
      skill: html,
      texto: 'img_html',
    },
    {
      skill: css,
      texto: 'img_css',
    },
    {
      skill: javascript,
      texto: 'img_javascript',
    },
    {
      skill: typescript,
      texto: 'img_typescript',
    },
    {
      skill: react,
      texto: 'img_react',
    },
    {
      skill: redux,
      texto: 'img_redux',
    },
    {
      skill: node,
      texto: 'img_node',
    },
    {
      skill: git,
      texto: 'img_git',
    },
  ];
  return (
    <div id='skills' className='center margin skills'>
      <h2>MIS HABLIDADES:</h2>
      <div className='contenedor-skills'>
        {info.map((el) => (
          <img src={el.skill} alt={el.texto} />
        ))}
      </div>
    </div>
  );
};
