import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import SelectCategory from './components/select-category.jsx';

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
        <h1>BERRY GOOD FRIENDS</h1>
      </header>
      <main>
        <SelectCategory category={category} setCategory={setCategory} />

        <section className="cards">
          <div className="grid">
            {group && category != 0 ? (
              group.map((user) => {
                return <Card key={user.id} user={user} category={category} />;
              })
            ) : (
              <div className="description">
                <p>
                  Make new friends and feed them berries i.e. "Berry Your Good
                  Friends"
                </p>
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
