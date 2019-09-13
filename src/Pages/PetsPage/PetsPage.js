import React from 'react';
import { Link } from 'react-router-dom';
import pets from '../../components/pets.json';
import s from './PetsPage.module.css';

const PetsPage = () => (
  <ul className={s.nav}>
    {pets.map(pet => (
      <Link className={s.a} key={pet.id} to={`pets/${pet.id}`}>
        <div>
          <img className={s.card} src={pet.image} alt={pet.name} width="320" />
          <h3 className={s.title}>{pet.name}</h3>
        </div>
      </Link>
    ))}
  </ul>
);

export default PetsPage;
