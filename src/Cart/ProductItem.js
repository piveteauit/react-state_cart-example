import React from "react";

export function ProductItem({id, name, price, img}) {
  const qty = 0;
  const total = 0;

  return (
    <div style={{flex: "30%", margin: 10, border: "1px solid #CCC", borderRadius: 5, justifyContent: "center", display: "flex"}}>
      <div style={{width: "150px",}}>
        <div style={{justifyContent: "space-between", display: "flex", margin: 10}}>
          <span>{name}</span>
          <span>({price} €)</span>
        </div>
        <div>
          <img style={{border: "3px solid #444", borderRadius: 5}} src={img}/>
        </div>

        <div style={{justifyContent: "space-between", display: "flex", margin: 10}}>
          <button>
            -
          </button>

          <span>
            {qty}
          </span>

          <button>
            +
          </button>
        </div>

        <div style={{justifyContent: "space-between", display: "flex", margin: 10}}>
          <span>
            Total:
          </span>
          <span>
            {total} €
          </span>
        </div>
      </div>
    </div>
  )
}
