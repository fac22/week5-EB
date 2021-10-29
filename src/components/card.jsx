import React, { useEffect, useState } from 'react';
import './card.css';
import BerryStatus from './berry-status';

function Card(props) {
  const [berry, setBerry] = useState(0);
  // const [berry, setBerry] = useState(() => {
  //   console.log(berry);
  //   localStorage.getItem(parseInt(`${props.user.id}`));
  // });
  const [flipped, setFlipped] = useState('');

  useEffect(() => {
    setBerry(JSON.parse(window.localStorage.getItem(`${props.user.id}`)));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(`${props.user.id}`, berry);
  }, [berry]);

  const increaseBerry = () => {
    return setBerry(berry + 1);
  };
  const decreaseBerry = () => {
    return setBerry(berry - 1);
  };

  return (
    <article className={`card-container ${flipped}`}>
      <div className="card card-a">
        <button className="flip-btn" onClick={() => setFlipped('flipped')}>
          Surprise 😉
        </button>

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
        <button className="flip-btn" onClick={() => setFlipped('')}>
          Feed me more 🍓 !!!
        </button>

        <div>
          <h2>{props.user.name}</h2>
          <p>
            My website{' '}
            <a href={`https://${props.user.website}`}>{props.user.website}</a>
          </p>
          <BerryStatus
            berry={berry}
            username={props.user.username}
            city={props.user.address.city}
            company={props.user.company.name}
          />
        </div>
      </div>
    </article>
  );
}

export default Card;
