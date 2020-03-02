import React from 'react';

import List from './components/list'
import Add from './components/add'
import Search from './components/search'
import Remove from './components/remove'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </header>

      <Search />

      <main>
        <List />
      </main>

      <Add />

      <Remove />
    </div>
  );
}

export default App;
