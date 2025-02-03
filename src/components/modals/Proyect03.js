import React from "react";
import imagen from "../../assets/image/projects/blogCore-sistema.png";
import Proyect from "./Proyect";
import image from "../../assets/image/projects/blogCore-sistem.png";

const Proyect03 = () => {
  return (
    <Proyect
      srcImg={imagen}
      srcImge={image}
      proyectTile="Blog Core"
      proyectDesc="Blog de Gestion de contenido de articulos variados, separado por categorias y articulos."
      proyectModul="Seguridad, Gestion de Contenido, Diseño y Construccion de Base de Datos."
      tecno="C#, .NET Core 8, MVC, SQL Server, HTML, CSS, Bootswatch, Identity, Repository Pattern, Postman, Github"
    />
  );
};

export default Proyect03;
