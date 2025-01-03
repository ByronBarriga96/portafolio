import React from "react";
import Modal from "./Modal";
import "./styles/Modal.css";
import { useModal } from "./useModal";
import ModalElement from "./modals/ModalElement";
import Modal01 from "../assets/image/projects/allmight.png";
import Proyect01 from "./modals/Proyect01";
import Modal02 from "../assets/image/projects/pets.png";
import Proyect02 from "./modals/Proyect02";
import Modal05 from "../assets/image/projects/perro.png";
import Proyect05 from "./modals/Proyect05";
import Modal06 from "../assets/image/projects/hospice.png";
import Proyect06 from "./modals/Proyect06";
import Modal08 from "../assets/image/projects/farfalla.png";
import Proyect08 from "./modals/Proyect08";
import Modal09 from "../assets/image/projects/atiendo.png";
import Proyect09 from "./modals/Proyect09";
import Modal11 from "../assets/image/projects/articulos-cientificos.png";
import Proyect11 from "./modals/Proyect11";
import Modal12 from "../assets/image/projects/homeofi.png";
import Proyect12 from "./modals/Proyect12";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  const [isOpenModal8, openModal8, closeModal8] = useModal(false);
  const [isOpenModal9, openModal9, closeModal9] = useModal(false);
  const [isOpenModal11, openModal11, closeModal11] = useModal(false);
  const [isOpenModal12, openModal12, closeModal12] = useModal(false);

  return (
    <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
      <ModalElement
        image={Modal09}
        e={openModal9}
        imgTitle="Sistema Atiendo"
        imgDesc="Plataforma destinada a la gestion de Tiendas Virtuales, creada con Angular y C# Framework 4.8 y MySQL."
        tags={[
          "C#",
          ".NET",
          "Framework 4.8",
          "MySQL",
          "Angular",
          "TypeScript",
          "JavaScript",
          "GitHub",
          "Postman"]}
      />
      <Modal isOpen={isOpenModal9} closeModal={closeModal9}>
        <Proyect09 />
      </Modal>

      <ModalElement
        image={Modal08}
        e={openModal8}
        imgTitle="Farfalla System"
        imgDesc="Plataforma Web para la administracion de Inventarios, Compras y Ventas de Joyas, creada con Laravel 8 y MySQL."
        tags={["PHP",
          "Laravel 8",
          "Symfony",
          "JavaScript",
          "MySQL",
          "Postman",
          "GitHub"]}
      />
      <Modal isOpen={isOpenModal8} closeModal={closeModal8}>
        <Proyect08 />
      </Modal>

      <ModalElement
        image={Modal11}
        e={openModal11}
        imgTitle="UNACH - S.P.C."
        imgDesc="Sistema Web creado para la gestion de Articulos Cientificos, creado con .Net Framework 4.5 y SQL Server."
        tags={["C#",
          ".NET",
          "Framework 4.5",
          "MVC",
          "Web",
          "SQL Server",
          "Javascript",
          "Postman",
        ]}
      />
      <Modal isOpen={isOpenModal11} closeModal={closeModal11}>
        <Proyect11 />
      </Modal>

      <ModalElement
        image={Modal12}
        e={openModal12}
        imgTitle="HOMEOFI"
        imgDesc="Plataforma destinada a multiservicios profesionales, creada con PHP, JavaScript y MySQL"
        tags={["PHP",
          "JavaScript",
          "MVC",
          "MySQL",
          "HTML",
          "CSS",
          "Postman",
          "Git",
          "GitHub"]}
      />
      <Modal isOpen={isOpenModal12} closeModal={closeModal12}>
        <Proyect12 />
      </Modal>

      <ModalElement
        image={Modal01}
        e={openModal1}
        imgTitle="All Might System"
        imgDesc="Sistema de Registro de Catastros y Predios de la sequia cantonal Mocha-Huachi, creado con Java y PostgreSQL."
        tags={["Java",
          "PostgreSQL",
          "N-Capas",
          "Desktop",
          "Linux",
          "JasperReports",
          "Pentaho"]}
      />
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <Proyect01 />
      </Modal>

      <ModalElement
        image={Modal06}
        e={openModal6}
        imgTitle="System Hospice"
        imgDesc="Sistema de Historias Clinicas y difucion de Contenido de Hospice, creado con JSF (Java) y PostgreSQL."
        tags={["JSF",
          "Java",
          "PostgreSQL",
          "MVC",
          "Web",
          "hTML",
          "CSS",
          "Postman"]}
      />
      <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
        <Proyect06 />
      </Modal>

      <ModalElement
        image={Modal02}
        e={openModal2}
        imgTitle="Helping Pets"
        imgDesc="App movil para la adopcion y esterilizacion de mascotas, creada con React Natice y SQL Server."
        tags={["React Native",
          "SQL Server",
          "JavaScript",
          "Android",
          "iOS",
          "Postman",
          "Git",
          "GitHub"]}
      />
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <Proyect02 />
      </Modal>

      <ModalElement
        image={Modal05}
        e={openModal5}
        imgTitle="MR.DOG - SYSTEM"
        imgDesc="App movil para el control e inventario de mascotas de un centro de cuidado, creada con Ionic y PostgreSQL."
        tags={["Ionic",
          "PostgreSQL",
          "JavaScript",
          "Android",
          "iOS",
          "Postman",
          "Git",
          "GitHub"]}
      />
      <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
        <Proyect05 />
      </Modal>
    </div>
  );
};

export default Modals;
