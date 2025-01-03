import React from "react";
import imagen from "../../assets/image/projects/hospice-sistem.png";
import Proyect from "./Proyect";
import image from "../../assets/image/projects/hospice-sistema.png";

const Proyect06 = () => {
  return (
    <Proyect
      srcImg={imagen}
      srcImge={image}
      proyectTile="System Hospice"
      proyectDesc="Sistema de Historias Clinicas y difucion de Contenido del Hospice."
      proyectModul="Historias Clinicas, Seguridad, Pagina Web de Difucion y conocimiento social, Diseño y Construccion de Base de Datos."
      tecno="JSF, Java, PostgreSQL, MVC, Web, HTML, CSS"
    />
  );
};

export default Proyect06;
