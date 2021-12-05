import React from "react";
import geah_salud_cover from "../../images/geah_salud_cover.png"

function SaludyBelleza () {

  const content = <p>  Servicio de calidad con personal altamente calificado. Ponemos a tu disposición las mejores líneas del mercado de belleza. Manos mágicas que resaltarán tu belleza natural, la mejor versión de ti.</p>
  const title =<p className="title">Salud y Belleza</p>
 return (
<>

<div className="container">
<div className="columns-reverse">
  <div className="column has-text-centered">
{title}
  </div>
  <div className="column">
  <figure className="image">
  <img alt="four women in bikini"  src={geah_salud_cover} />
  </figure>  </div>
  <div className="column">
{content}
  </div>
</div>
</div>
</>
);
}

export default SaludyBelleza;