import React from "react";
import image from "../../assets/image/projects/farfalla-sistem.png";
import imagen from "../../assets/image/projects/farfalla-sistema.png";
import Proyect from "./Proyect";

const Proyect08 = () => {
  return (
    <Proyect
      srcImg={image}
      srcImge={imagen}
      proyectTile="Farfalla System"
      proyectDesc="Plataforma destinada a la administracion de Inventarios, Compras y Ventas de Joyas."
      proyectModul="Seguridad, Inventarios, Ventas, Compras, Diseño y Construccion de Base de Datos."
      tecno="Angular, C#, .Net, Framework 4.8, MySQL, TypeScript, JavaScript, GitHub, Postman"
    />
  );
};

export default Proyect08;
