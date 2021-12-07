import React from "react";
import {NavLink } from "react-router-dom";

function TabsProductos() {
  const ProductosTab = <div className="container">

  <div className="tabs is-centered">
    <ul>
      <li ><NavLink to="/regeneratur"><p > Regeneratur Vitamina C</p></NavLink></li>
      <li><NavLink to="/biotina"><p>Colageno Hydrolizado + Biotina </p></NavLink></li>
      <li> <NavLink to="/rojos"><p> Peau de'Ange: Premium Frutos Rojos</p></NavLink></li>
      <li> <NavLink to="/premium"><p> Peau de'Ange: Premium</p></NavLink></li>
      <li><NavLink to="/camu"><p>CamuPlus Vitamina C </p></NavLink></li>
      <li><NavLink to="/magnesio"><p>Closuro de Magnesio </p></NavLink></li>
    </ul>
  </div>
   </div>
  return (
    <>{ProductosTab}</>
  );
}
export default TabsProductos;