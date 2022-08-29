import React from "react";

interface ICardProps {
  chocolate: IChocolateItem;
}

export const Card: React.FC<ICardProps> = ({ chocolate }) => {
  <div>
    <img src={chocolate.img} alt="cover-product" />
    <h6>{chocolate.name}</h6>
    <p>{chocolate.price}</p>
    <button>Buy</button>
  </div>;
};

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
