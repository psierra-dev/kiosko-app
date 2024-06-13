import { SPresentation } from "./style";
import carrito from "@assets/carrito.png";
import Image from "next/image";

export default function Presentation() {
  return (
    <SPresentation>
      <div className="container">
        <div className="container-eslogan">
          <h4>Todo lo que buscas en el dia.</h4>

          <p>Desde el kiosko hasta tu casa</p>
        </div>

        <div className="pngcarrito">
          <Image src={carrito} alt="carrito" />
        </div>
      </div>
    </SPresentation>
  );
}
