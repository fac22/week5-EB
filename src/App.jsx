import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import SelectCategory from './components/select-category.jsx';

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
  const [category, setCategory] = useState(0);
  const [group, setGroup] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setGroup(data);
      });
  }, [category]);

  return (
    <div className="App">
      <header>
        <h1>Berry Good Friends</h1>
      </header>
      <main>
        <SelectCategory category={category}  setCategory={setCategory}/>

        <section className="cards">
          <div className="grid">
            {group && category != 0 ? (
              group.map((user) => {
                return <Card key={user.id} user={user} category={category} />;
              })
              ) : (
                <div>
              <p>Make new friends and feed them berries i.e. "Berry Your Good Friends"</p>
              <p>PREPARE FOR SHOCK AND AWE.....AND 🍓🍓🍓🍓🍓!!!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
