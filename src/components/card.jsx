import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.user.id}?set=set${props.category}&size=180x180`}
        alt="user"
      />
      <h2>{props.user.name}</h2>

      <div className="button-flex">
        <button>🍓 -</button>
        <p>🍓 Score</p>
        <button>+ 🍓</button>
      </div>
    </div>
  );
}

export default Card;
