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

  function berryStatus(berryV) {
    if (berryV >= 1 && berryV < 5) {
      return <p>My nickname is {props.user.username}</p>
    } else if (berryV >= 5 && berryV < 12) {
      return (
        <>
        <p>My nickname is {props.user.username}</p>
      <p>I live in {props.user.address.city}</p>
      </>
      )
    } else if (berryV >= 12 && berryV < 20) {
      return (
        <>
        <p>My nickname is {props.user.username}</p>
        <p>I live in {props.user.address.city}</p>
        <p>I work at {props.user.company.name}</p>
        </>
      )
    } else if (berryV >= 20) {
      return (
        <>
        <p>My nickname is {props.user.username}</p>
      <p>I live in {props.user.address.city}</p>
      <p>I work at {props.user.company.name}</p>
      <p>We're 🍓🍓🍓 friends now!</p>
        </>
      )
    }
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
      {/* <p>My nickname is {props.user.username}</p>
      <p>I live in {props.user.address.city}</p>
      <p>I work at {props.user.company.name}</p>
      <p>We're friends now 🍓🍓🍓</p> */}
      {berryStatus(berry)}
      </div>

    </div>
    </article>
  );
}

export default Card;
