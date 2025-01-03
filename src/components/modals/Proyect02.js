import React from "react";
import imagen from "../../assets/image/projects/pets-sistem.png";
import Proyect from "./Proyect";
import image from "../../assets/image/projects/pets-sistema.png";

const Proyect02 = () => {
  return (
    <Proyect
      srcImg={imagen}
      srcImge={image}
      proyectTile="Helping Pets"
      proyectDesc="App movil para la adopcion y esterilizacion de mascotas"
      proyectModul="Esterilizacion, Control, Adopcion, Seguridad e integracion de Google Maps"
      tecno="React Native, SQL Server, JavaScript, Android, iOS, Postman, Git, GitHub"
    />
  );
};

export default Proyect02;
