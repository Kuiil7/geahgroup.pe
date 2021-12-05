import React from "react";
import aboutme_geri from "../../components/images/geah_tree.jpg"

function AboutMe() {


const aboutGeri =   <div>

  <p className="has-text-justified">
<strong>GEAH GROUP</strong> fue fundado en 2019 por Geraldine Huiñac Figueroa, creando así una experiencia completamente nueva para los consumidores más exigentes al introducirse en el rubro de salud y belleza . </p>
<br />
<p className="has-text-justified">
 <strong>    GEAH PHARM </strong>cuenta con suplementos nutricionales elaborados con los insumos más sublimes, nutritivos y naturales del Peru. <strong>GEAH PHARM </strong> comercializa sus productos a nivel nacional. </p>
 <br />
<p className="has-text-justified">

 Medicina Estética Ponemos a tu disposición productos para el cuidado de tu salud y imagen. Brindamos cursos en salud, estéticos y servicios de cuidado personal. Garantizamos el mejor cuidado de tu imagen y salud.
 </p>
 <br />
 <p className="has-text-justified">
 Llevamos calidad de vida al hogar de cada peruano, avalados por instituciones nacionales referentes a salud. Caracterizados por tener un compromiso constante en desarrollar nuevos productos que satisfagan las necesidades que hay en el mercado. Estamos comprometidos con el cuidado de la salud y la belleza de todos los peruanos.
  </p>
</div>
  return (
    <>
    <div className="container ">
    <div className="columns-reverse">
  <div className="column has-text-centered">
  <p className="title">Nosotros</p>
  </div>
  <div className="column">


<div className="columns ">
<div className="column is-4">
<img src={aboutme_geri} alt="founder's portrait" />
</div>
<div className="column is-8">
<p className="title is-1 t">Geraldine Huiñac Figueroa </p>
<p className="subtitle is-4">Fundadora </p>
{aboutGeri}
</div>
</div>
</div>




    </div>

</div>

    </>
  );
}

export default AboutMe;
