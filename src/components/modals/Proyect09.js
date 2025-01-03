import React from "react";
import image from "../../assets/image/projects/atiendo-sistem.png";
import imagen from "../../assets/image/projects/atiendo-sistema.png";
import Proyect from "./Proyect";

const Proyect09 = () => {
  return (
    <Proyect
      srcImg={image}
      srcImge={imagen}
      proyectTile="Sistema Atiendo"
      proyectDesc="Plataforma destinada a la gestion de Tiendas Virtuales."
      proyectModul="Seguridad, Inventarios, Facturacion Electronica, Diseño y Construccion de Base de Datos."
      tecno="Angular, C#, .Net, Framework 4.8, MySQL, TypeScript, JavaScript, GitHub, Postman"

    />
  );
};

export default Proyect09;
