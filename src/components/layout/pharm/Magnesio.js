import React from "react";
import Magnesio1 from "../../images/bottles/blue_bottle.png"
import Card from "./Card";

const modo = <p><strong>MODO DE USO:</strong> Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.</p>

const ingredientes = <p><strong>INGREDIENTES:</strong>Colageno Hidrolizado, Arándano, Magnesio, Zinc, Maltodextrina, Vitamina C (Ácido ascórbic), stevia.</p>
function Magnesio () {
  return (
    <>

<Card
bottleImgs={Magnesio1}
modo={modo}
ingredientes={ingredientes}
/>

    </>
  );
}
export default Magnesio;