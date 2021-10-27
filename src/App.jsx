import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/card';

function App2() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>Yuhuuuuuuu</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

function App() {
  const [category, setCategory] = useState();
  const [group, setGroup] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setGroup(data);
      });
  }, [category]);

  const groupA = [
    { id: 1, name: 'George' },
    { id: 2, name: 'Ariadni' },
    { id: 3, name: 'Maria' },
  ];

  return (
    <div className="App">
      <header>
        <h1>Like ME!!!</h1>
      </header>
      <main>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setCategory(event.target.category.value);
          }}>
          <label htmlFor="category">
            <p>Choose a users theme:</p>
            <select name="category" id="category">
              <option value="---">---</option>
              <option value="1">Robots</option>
              <option value="2">Monsters</option>
              <option value="3">Aliens</option>
              <option value="4">Cats</option>
            </select>
          </label>
          <button type="submit">Go!</button>
        </form>

        <section className="cards">
          <div>
            {group ? (
              group.map((user) => {
                return <Card key={user.id} user={user} category={category} />;
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
