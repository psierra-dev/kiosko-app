import React, { useEffect, useState } from "react";

const useView = () => {
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const actualizarEstadoPantalla = () => {
      if (window.innerWidth <= 768) {
        setPhone(true);
      } else {
        setPhone(false);
      }
    };

    // Agrega el listener para detectar cambios de tamaño de la ventana
    window.addEventListener("resize", actualizarEstadoPantalla);
    actualizarEstadoPantalla();

    // Limpia el listener al desmontar el componente
  }, []);

  return { phone };
};

export default useView;
