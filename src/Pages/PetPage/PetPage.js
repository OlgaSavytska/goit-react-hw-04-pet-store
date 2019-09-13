import React from 'react';
import { Link } from 'react-router-dom';
import items from '../../components/pets.json';
import s from './PetPage.module.css';

const PetCard = i => {
  const item = items.find(el => el.id === i.match.params.id);
  return (
    <div className={s.cont} key={item.id}>
      <Link className={s.button} to="/pets">
        Return
      </Link>
      <h2>All about {item.name}</h2>
      <div className={s.card2}>
        <img src={item.image} alt="animal" width="450px" />
        <div className={s.texts}>
          <p>
            <b>Age:</b> {item.age}
          </p>
          <p>
            <b>Gender:</b>
            {item.gender}
          </p>
          <p>
            <b>Color:</b> {item.color}
          </p>
          <p>
            <b>Breed:</b> {item.breed}
          </p>
          <div className={s.description}>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// PetCard.defaultProps = {
//   name: '',
//   age: null,
//   breed: '',
//   gender: '',
//   color: '',
//   image: '',
//   descrinpton: '',
// };

export default PetCard;
