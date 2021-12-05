import React from "react";
import geah_landing_9_16x9 from "../../components/images/geri_1_16x9.jpeg"
import Logos from "./Logos"
import ContactInfo from "./ContactInfo"

function Main() {

  const Link = <Link to="/aboutme"><img alt="Geraldine holding product bottles" src={geah_landing_9_16x9} /></Link>
  const Title = <p className="title is-size-4-mobile is-size-2-desktop  mt-5">Bienvenidos a GEAH GROUP!</p>

  return (
    <>
<section className="hero  is-fullheight">
<div className="has-text-centered">
{Link}
{Title}
<Logos/>
<ContactInfo/>
</div>
</section>
    </>
  );
}

export default Main;
