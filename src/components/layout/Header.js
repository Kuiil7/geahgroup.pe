import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import geah_logo_gg  from "../images/geah_logo_gg.png";


function Header() {

  const [isActive, setisActive] = useState(false)

  return (
    <div className="container">
   <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <NavLink className="navbar-item"  to="/">
<img  src={geah_logo_gg } alt="GEAH logo" />
GEAH GROUP
</NavLink>
    <div onClick={() => {setisActive(!isActive)}}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
        >
    <button  className="navbar-burger button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
    </div>
  </div>
  <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
   <div className='navbar-end'>
      <div className='navbar-item '>
 <NavLink className="navbar-item" to="/pharm">GEAH PHARM</NavLink>
 <NavLink className="navbar-item" to="/salud">Salud y Belleza</NavLink>
 <NavLink className="navbar-item" to="/estetica">Medicina Estética</NavLink>
 <NavLink className="navbar-item" to="/aboutme">Nosotros</NavLink>

          </div>
        </div>
      </div>
</nav>

    </div>
  );
}
export default Header;