// import logo from "./logo.svg";
// import './App.css';

import React from "react";
import { Card } from "./Card";
import { chocolates } from "./chocolates";

export const App = () => {
  return (
    <div>
      <h1>THE HOLLY SHOP</h1>
      {chocolates.map((chocolate) => (
        <Card
          key={chocolate.id}
          img={chocolate.imgURL}
          name={chocolate.name}
          price={chocolate.price}
        />
      ))}
    </div>
  );
};

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
