import React from "react";
import image from "../../assets/image/projects/homeofi-sistem.png";
import imagen from "../../assets/image/projects/homeofi-sistema.png";
import Proyect from "./Proyect";


const Proyect12 = () => {
  return (
    <Proyect
      srcImg={image}
      srcImge={imagen}
      proyectTile="Homeofi - Sistema Web"
      proyectDesc="Plataforma destinada a multiservicios profesionales y cursos en linea, audutorias y consultorias."
      proyectModul="Seguridad, Administracion, Usuario, Implementacion de Factores de Autenticacion, Diseño."
      tecno="PHP, JavaScript, MVC, MySQL, HTML, CSS, Postman, Git, GitHub"
    />
  );
};

export default Proyect12;
