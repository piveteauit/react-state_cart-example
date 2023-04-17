import React from "react";
import {ProductItem} from './ProductItem';

const PICSUM_SIZE = 150;

const products = [
  {
    id: 1,
    name: "Jasmin",
    price: 1.5,
    img: `https://picsum.photos/id/1/${150}`
  },
  {
    id: 2,
    name: "Rose",
    price: 1,
    img: `https://picsum.photos/id/12/${150}`
  },
  {
    id: 3,
    name: "Tulipe",
    price: 2.5,
    img: `https://picsum.photos/id/23/${150}`
  },
  {
    id: 4,
    name: "Thym",
    price: 1.5,
    img: `https://picsum.photos/id/34/${150}`
  },
  {
    id: 5,
    name: "Rosmarin",
    price: 1,
    img: `https://picsum.photos/id/45/${150}`
  },
  {
    id: 6,
    name: "Lavande",
    price: 2.5,
    img: `https://picsum.photos/id/56/${150}`
  },
]

export function Shop() {
  return (
    <div className={"Main-Shop"}>
      {
        products.map((product) => (
          <ProductItem {...product} />
        ))
      }
    </div>
  )
}
