import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/card';

function SelectCategory() {
  const [category, setCategory] = useState("");
  const [group, setGroup] = useState();

  return (
    <div className="App">
      <header>
        <h1>Like ME!!!</h1>
      </header>
      <main>
        <form onSubmit={
          event => {
            event.preventDefault();
            setCategory(event.target.category.value);
          }
        }>
          <label htmlFor="category">
            <p>Choose a users theme:</p>
            <select name="category" id="category">
              <option value="---">---</option>
              <option value="Robots">Robots</option>
              <option value="Monsters">Monsters</option>
              <option value="Aliens">Aliens</option>
              <option value="Cats">Cats</option>
            </select>
          </label>
          <button type="submit">Go!</button>
        </form>

        <section className="cards">
          <Card group={group} category={category}></Card>
        </section>
      </main>
    </div>
  );
}