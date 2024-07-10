import { useState } from 'react';

import data from './utils/data';
import { PersonType } from './utils/types';
import Header from './Header';
import List from './List';
import './App.css';

function App() {
  const [people, setPeople] = useState<PersonType[]>(data);

  const clearList = () => setPeople([]);

  return (
    <main>
      <section className="container">
        <Header people={people} />
        <List people={people} />
        <button type="button" className="btn" onClick={clearList}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
