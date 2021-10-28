import React, { useEffect, useState } from 'react';
import './card.css';

function Card(props) {
  const [berry, setBerry] = useState(0);

  useEffect(() => {
    setBerry(JSON.parse(window.localStorage.getItem(`${props.user.id}`)));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(`${props.user.id}${props.category}`, berry);
  }, [berry]);

  const increaseBerry = () => {
    return setBerry(berry + 1);
  }
  const decreaseBerry = () => {
    return setBerry(berry - 1)
  }

  return (
    <article className="card-container" onClick={event =>{ 
      event.stopPropagation();
      event.target.classList.toggle('flipped');
      }}>

    <div className="card card-a">
      <img
        src={`https://robohash.org/${props.user.id}?set=set${props.category}&size=180x180`}
        alt="user"
        />
      <h2>{props.user.name}</h2>

      <div className="button-flex">
        <button onClick={decreaseBerry}>🍓 -</button>
        <p>Score: {berry} 🍓</p>
        <button onClick={increaseBerry}>+ 🍓</button>
      </div>
    </div>
    <div className="card card-b">
      <div>
      <h2>{props.user.name}</h2>

      </div>

    </div>
    </article>
  );
}

export default Card;
