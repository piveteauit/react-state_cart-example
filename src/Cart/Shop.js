import React from "react";
import "./Shop.css";
import {ProductItem} from './ProductItem';

const PICSUM_SIZE = 150;

const products = [
  {
    id: 1,
    name: "Jasmin",
    price: 1.5,
    img: `https://picsum.photos/id/1/${PICSUM_SIZE}`,
    stock: 11,
  },
  {
    id: 2,
    name: "Rose",
    price: 1.3,
    img: `https://picsum.photos/id/12/${PICSUM_SIZE}`,
    stock: 8,
  },
  {
    id: 3,
    name: "Tulipe",
    price: 2.5,
    img: `https://picsum.photos/id/23/${PICSUM_SIZE}`,
    stock: 3,
  },
  {
    id: 4,
    name: "Thym",
    price: 1.5,
    img: `https://picsum.photos/id/34/${PICSUM_SIZE}`,
    stock: 12,
  },
  {
    id: 5,
    name: "Rosmarin",
    price: 0.8,
    img: `https://picsum.photos/id/45/${PICSUM_SIZE}`,
    stock: 0,
  },
  {
    id: 6,
    name: "Lavande",
    price: 2.5,
    img: `https://picsum.photos/id/56/${PICSUM_SIZE}`,
    stock: 67,
  },
]

export function Shop() {
  return (
    <div className={"Main-Shop"}>
      {
        products.map((product) => (
          <ProductItem key={`product_item-${product.id}`} {...product} />
        ))
      }
    </div>
  )
}
