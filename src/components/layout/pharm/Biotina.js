import React from "react";
import IMG_Biotina from "../../images/bottles/Biotina_pink.png"
import Card from "./Card";

function Hidrolizado() {
  const modo = <p><strong>MODO DE USO:</strong> Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.</p>
  const ingredientes = <p><strong>INGREDIENTES:</strong> Colageno Hidrolizado, vitamina C (acido ascorbico), biotina, camu camu, stevia y sabor limon. </p>

  return (
<>

<Card
bottleImgs={IMG_Biotina}
modo={modo}
ingredientes={ingredientes}
/>

</>
  );
}
export default Hidrolizado;