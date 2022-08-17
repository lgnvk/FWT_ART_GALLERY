import React from 'react';
import './App.module.scss';

import Header from '../Header';
import CardsGrid from '../CardsGrid';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CardsGrid />
      <Footer />
    </div>
  );
}

export default App;
