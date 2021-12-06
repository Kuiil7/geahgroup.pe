import {NavLink } from "react-router-dom";


  function Logos () {
  return (
<>
<div className="container">
<div class="columns is-mobile ">
  <div class="column  ">
  <figure className="avatar" >
  <NavLink to="pharm">
<img  src="../images/geah_logo_pharm_3.png" width="250" alt="geah pharm" className=" avatar"/>
</NavLink>
</figure>
  </div>
  <div class="column">
  <figure className="avatar" >
  <NavLink to="salud">
<img  src="../images/geah_logos_sbv2.png" width="250"   alt="geah pharm" className=" avatar"/>
</NavLink>
</figure>
  </div>
  <div class="column"><figure className="avatar" >
  <NavLink to="estetica">
<img  src="../images/geah_logo2.jpeg" width="250"   alt="geah pharm" className=" avatar"/>
</NavLink>
</figure></div>
</div>
</div>
</>
);
};

export default Logos;