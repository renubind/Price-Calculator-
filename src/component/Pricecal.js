import React from "react";
import { useState } from "react";
export default function Pricecal() {
  const [initial, setInitial] = useState(undefined);
  const [quantity, setQuantity] = useState(undefined);
  const [current, setCurrent] = useState(undefined);
  const [total, setTotal] = useState(undefined);

  const calculatePrice = (e) => {
    e.preventDefault();
    const total = (current - initial) * quantity;
    setTotal(total);
  };

  return (
    <div>
      <div>
        <h3>Initial Price</h3>
        <input
          placeholder="Enter Initial Price Here"
          value={initial}
          onChange={(e) => setInitial(e.target.value)}
        />

        <h3>Qauntity of Price</h3>
        <input
          placeholder="Enter the Number of Stocks Bought"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <h3>Current Price</h3>
        <input
          placeholder="Enter the Current Price of the Stocks"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <br></br>
        <button onClick={calculatePrice}>Tell Me!!</button>
      </div>

        {total>=0 && (<h1>Profile is:{total}</h1>) }
        {total<0 && (<h1>Loss is:{total}</h1>) }



      <div>
        <p>©| 2022 | reenabind</p>
      </div>
      <div>
        <img src=".../component/twitter.png" alt="twitter"/>
        <img src=".../instagram.png"  alt="instragram" />
        <img src=".../github.png"  alt="github" />
      </div>
    </div>
  );
}
