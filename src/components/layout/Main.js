import React from "react";
import geah_landing_9_16x9 from "../../components/images/geri_1_16x9.jpeg"
import Logos from "./Logos"
import ContactInfo from "./ContactInfo"
import {NavLink } from "react-router-dom";

function Main() {

  const Link = <NavLink to="/pharm"><img alt="Geraldine holding product bottles" className="card" width={1600} src={geah_landing_9_16x9} /></NavLink>

  return (
    <>
    <section className="hero is-fullheight">
  <div className="hero-body">
  {Link}
 
  </div>
  <Logos/>
<ContactInfo/>
</section>
    </>
  );
}

export default Main;
