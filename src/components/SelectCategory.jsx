import React, { useState, useEffect } from 'react';

function SelectCategory(props) {
 return (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      props.setCategory(event.target.category.value);
    }}>
    <label htmlFor="category">
      <p>Choose a users theme:</p>
      <select name="category" id="category">
        <option value="0">---</option>
        <option value="1">Robots</option>
        <option value="2">Monsters</option>
        <option value="3">Aliens</option>
        <option value="4">Cats</option>
      </select>
    </label>
    <button type="submit">Go!</button>
  </form>
 )
}

export default SelectCategory;