import React from "react";
import ProductosVS from "./TabsProductos";


function Card(props) {


  const Bottles = <div className="card">
  <div className="card-image p-4">
    <figure className="image  ">
      <img src={props.bottleImgs} alt={props.alt}/>
    </figure>
  </div>
  <div className="card-content">
{props.modo}
   {props.ingredientes}
  </div>
</div>

  return (
<>
<div className="container">
<ProductosVS />

<div className="columns is-mobile is-justify-content-center">
  <div className="column is-4-desktop
">
{Bottles}
  </div>
</div>

</div>
</>
  );
}
export default Card;