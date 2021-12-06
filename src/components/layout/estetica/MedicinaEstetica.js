import React from "react";
import geah_estetica_cover from "../../images/geah_estetica_cover.png"

function MedicinaEstetica () {

  const contentList = <div className=" content has-text-left px-4 ">
  <ul  >
<li > Limpiezas faciales</li>
<li > Megadosis de vitamina C endovenosa</li>
<li > Mesoterapia reducción de papada y cachetes</li>
<li > Reductores y reafirmantes</li>
<li > Carboxiterapia y drenaje linfático</li>
<li > Levantamiento de glúteos mas reafirmantes con peptonas y vitamina C </li>
<li > Peptonas en piernas,pantorrillas, brazos y pectorales.</li>
<li > Taller de inyectoterapia ( Sin conocimientos previos)</li>
<li > Taller de inyectables básico aplicados a la estética</li>
</ul>
</div>

const Title =   <p className="title">Medicina Estética</p>
const CoverImage = <figure className="image " ><img alt="four women in bikini "  src={geah_estetica_cover} /></figure>




 return (
<>
<div className="container ">
<div className="columns-reverse">
<div className="column has-text-centered">{Title}</div>
<div className="column">{CoverImage}</div>
<div className="columns">
<div className="column">{contentList}</div>
</div>

</div>
</div>

</>
);
}

export default MedicinaEstetica;