// import logo from "./logo.svg";
import "./App.css";
import { ShoppingCart } from "./ShoppingCart";

import React from "react";
import { Card } from "./Card";
import { chocolates } from "./chocolates";

export const App = () => {
  return (
    <div>
      <div className="header">
        <h1>THE HOLLY SHOP</h1>
        <ShoppingCart />
      </div>

      <div className="flex-container">
        {chocolates.map((each) => (
          <Card chocolate={each} />
        ))}
      </div>
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
