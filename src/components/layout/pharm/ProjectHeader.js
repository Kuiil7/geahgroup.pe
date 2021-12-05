import React from "react";
import {Link } from "react-router-dom";
import Camu from "../../images/bottles/test_orange_2.png"
import Regeneratur from "../../images/bottles/reg_vitamin2.png"
import Biotina from "../../images/bottles/Biotina_pink.png"
import Rojos from "../../images/bottles/frutos_rojos.png"
import Premium from "../../images/bottles/PAP_Premium_black.png"

const Header = <div className="tabs is-centered">
<div className="columns has-text-centered is-mobile">
<div className="column p-5 ">
<img alt=" "  width="58%" src={Regeneratur} />
<Link className="navbar-item" to="/regeneratur">
Regeneratur Vitamina C</Link>
</div>

<div className="column p-5 ">
<img alt=" "  width="60%" src={Camu} />
<Link className="navbar-item" to="/camu">CamuPlus Vitamina C</Link>
</div>

<div className="column p-5">
<img alt=" "  width="19%"src={Biotina} />
<Link className="navbar-item" to="/biotina"> Peaud de'Ange Colágeno Hidrolizado + Biotina</Link>
</div>

<div className="column p-5">
<img alt=" "  width="26%" src={Rojos} />

<Link className="navbar-item" to="/rojas"> Peau de'Ange: Premium Fruta Rojas</Link>
</div>

<div className="column p-5">
<img alt=" "  width="33%" src={Premium} />
<Link className="navbar-item" to="/premium"> Peau de'Ange: Premium</Link>
</div>
</div>
</div>

function ProjectHeader() {
  return (
<div className="container px-5">
<div className="columns">
<div className="column
scrolling-wrapper
scrolling-hidden">
{Header}
</div>
</div>
</div>
  );
}
export default ProjectHeader;