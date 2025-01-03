import React from "react";
import image from "../../assets/image/projects/articulos-sistema.png";
import imagen from "../../assets/image/projects/articulos-sistem.png";
import Proyect from "./Proyect";

const Proyect11 = () => {
  return (
    <Proyect
      srcImg={image}
      srcImge={imagen}
      proyectTile="UNACH - Sistema Web Articulos Cientificos"
      proyectDesc="Sistema de Gestion de Publicaciones Cientificas"
      proyectModul="Seguridad, Gestion de Articulas, Administracion, Reporteria, Diseño."
      tecno="C#, .Net, Framework 4.5, SQL Server, JavaScript, MVC, Postman, Git, Azure"
    />
  );
};

export default Proyect11;
