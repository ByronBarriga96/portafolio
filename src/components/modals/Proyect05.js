import React from "react";
import imagen from "../../assets/image/projects/perro-sistem.png";
import Proyect from "./Proyect";
import image from "../../assets/image/projects/perro-sistema.png";

const Proyect05 = () => {
  return (
    <Proyect
      srcImg={imagen}
      srcImge={image}
      proyectTile="MR.DOG - SYSTEM"
      proyectDesc="App movil para el control e inventario de mascotas de un centro de cuidado."
      proyectModul="Inventario, Seguridad e integracion de Google Maps, Diseño y Construccion de Base de Datos."
      tecno="Ionic, PostgreSQL, JavaScript, Android, iOS, Postman, Git, GitHub"
    />
  );
};

export default Proyect05;
