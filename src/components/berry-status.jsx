import React, { useEffect, useState } from 'react';

function BerryStatus(props) {
  if (props.berry < 1) {
    return <p></p>;
  }
  if (props.berry >= 1 && props.berry < 5) {
    return <p>My nickname is {props.username}</p>
  } else if (props.berry >= 5 && props.berry < 12) {
    return (
      <>
      <p>My nickname is {props.username}</p>
      <p>I live in {props.city}</p>
    </>
    )
  } else if (props.berry >= 12 && props.berry < 20) {
    return (
      <>
      <p>My nickname is {props.username}</p>
      <p>I live in {props.city}</p>
      <p>I work at {props.company}</p>
      </>
    )
  } else if (props.berry >= 20) {
    return (
      <>
      <p>My nickname is {props.username}</p>
      <p>I live in {props.city}</p>
      <p>I work at {props.company}</p>
      <p>We're 🍓🍓🍓 friends now!</p>
      </>
    )
  }
}

export default BerryStatus