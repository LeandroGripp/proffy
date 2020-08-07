import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img
        src="https://avatars2.githubusercontent.com/u/48407152?s=460&u=325b37be00cf8fab936f21eb6a7e0a649c0514fe&v=4"
        alt="Leandro Gripp"
      />
      <div>
        <strong>Leandro Gripp</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das
      pessoas através de experiências. Mais de 200.000 pessoas já passaram
      por uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon}alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;