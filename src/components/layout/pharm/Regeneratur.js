import React from "react";
import ProjectHeader from "./ProjectHeader";
import RegIV from "../../images/geah_bottle_iv.jpg"
import Video1 from "../../videos/Video1"

function Regeneratur () {

const content = <div className="has-text-justified is-size-5" >
<p  >Para funcionar correctamente, nuestro <strong> sistema inmunitario requiere equilibrio y armonía </strong>, por lo que hay que tener en cuenta que los nutrientes que ingerimos a través de nuestra dieta ejercen una gran influencia en él.Nuestras necesidades de ciertos nutrientes varían en función de una serie de factores, entre los que se incluyen los elementos externos.
</p>
<p  className="py-2">Una ampolla contiene el equivalente a la vitamina C por aproximadamente 15 kilos de naranja.
</p>
<p  >La terapia endovenosa con vitamina C logra concentraciones elevadas que no lograríamos de forma oral, alcanzamos un nivel en sangre 125 veces más alto que tomándola, lo cual <strong> amplifica su poder antioxidante. Aparte de los usos en el metabolismo de nuestro cuerpo </strong>, la vitamina C es ampliamente utilizada en el área estética y de medicina antienvejecimiento; por su potente acción como antioxidante, promueve la formación de colágeno, ayudando a mejorar la luminosidad, el tono y la textura de la piel.
</p>
</div>

const title = <p className="title is-2">REGENERATUR VITAMINA C</p>
const IVimage = <img src={RegIV} width="50%" alt="bottle " className="is-pulled-right p-2 "/>

 return (
<>
<div className="container ">
<ProjectHeader/>
<div className="columns-reverse">
<div className="column">
  {title}
<Video1  />
</div>
<div className="column">
{IVimage}
{content}
</div>
</div>
</div>
</>
);
}

export default Regeneratur;