import React from 'react';
import "./ProductItem.css";

export function ProductItem({id, name, price, stock, img}) {
  const quantity = 0;
  const currentRemaingStock = stock;

  return (
    <div className={"Main-ProductItem"}>
      <div className={"Wrapper-ProductItem"}>
        <div className={"Header-ProductItem"}>
          <span>
            {name}
          </span>
          <span>
            ({price} €)
          </span>
        </div>

        <div className={"Header-ProductItem"}>
          <span>
            Stock restant:
          </span>
          <span>
            {currentRemaingStock}
          </span>
        </div>
        <div>
          <img alt={`Produit ${name} en bouquet`} className={"Image-ProductItem"} src={img}/>
        </div>

        <div className={"WrapperCTA-ProductItem"}>
          <button onClick={() => console.log(`New quantity should be ${quantity - 1}`)}>
            -
          </button>

          <span>
            {quantity}
          </span>

          <button onClick={() => console.log(`New quantity should be ${quantity + 1}`)}>
            +
          </button>
        </div>

        <div className={"WrapperCTA-ProductItem"}>
          <span>
            Total:
          </span>
          <span>
            {quantity * price} €
          </span>
        </div>
      </div>
    </div>
  )
}
