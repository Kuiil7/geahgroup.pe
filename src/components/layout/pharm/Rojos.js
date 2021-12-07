import React from "react";
import FrutosRojos from "../../images/bottles/frutos_rojos.png"
import Card from "./Card";
function Rojos() {
  const modo = <p><strong>MODO DE USO:</strong> Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.</p>
  const ingredientes = <p><strong>INGREDIENTES:</strong> Colageno Hidrolizado, vitamina C (acido ascorbico), biotina, camu camu, stevia y sabor limon. </p>

  return (
<>
<Card
bottleImgs={FrutosRojos}
modo={modo}
ingredientes={ingredientes}
/>

</>
  );
}
export default Rojos;