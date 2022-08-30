import React from "react";
import { IChocolateItem } from "./chocolates";
import "./Card.css";
import { PreviewButton } from "./PreviewButton";

interface ICardProps {
  chocolate: IChocolateItem;
}

export const Card: React.FC<ICardProps> = ({ chocolate }) => (
  <div className="div-card">
    <img className="Image" src={chocolate.imgURL} alt="cover-product" />
    <h6>{chocolate.name}</h6>
    <p>${chocolate.price}</p>
    <button>Buy</button>
    <PreviewButton description={chocolate.description} />
  </div>
);

// how can i submit the type of velues inside the funcion?
// like:
// export const Card = (props) : String, string, number => {
//   return (
//     <div>
//       <img src={props.pic} alt="product" />
//       <h6>{props.name}</h6>
//       <p>{props.price}</p>
//       <button></button>
//     </div>
//   );
// };
