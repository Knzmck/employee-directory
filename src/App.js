import React from 'react';
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Main />
   Hello world
   </Wrapper>
    </div>
  );
}

export default App;
