import React from "react";
import image from "../../assets/image/projects/almight-sistema.png";
import imagen from "../../assets/image/projects/almight-sistem.png";
import "../styles/Modal.css";
import Proyect from "./Proyect";

const Proyect01 = () => {
  return (
    <Proyect
      srcImg={imagen}
      srcImge={image}
      proyectTile="Almight-Sistem"
      proyectDesc="Sistema de Registro de Catastros y Predios."
      proyectModul="Seguridad, Catastros, Predios, Informes, Diseño y Construccion de Base de Datos."
      tecno="Java, PostgreSQL, n-Capas, Desktop, Linux, Pentaho, JasperReports"

    />

  );
};

export default Proyect01;
