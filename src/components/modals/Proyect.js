import React from "react";
const Proyect = ({
  srcImg,
  srcImge,
  proyectTile,
  proyectDesc,
  proyectModul,
  proyectDesar,
  urlPage,
  tecno,
  urlRepo,
  btnPage,
}) => {
  return (
    <div className="modal-internal-container">
      <div>
        <p className="modal__title" style={{ color: 'black' }}>{proyectTile}</p>
        <p style={{ color: 'black', textAlign: 'center' }}>
          <img src={srcImg} alt="proyect" title="Proyect" className="proyect-image" width="250px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={srcImge} alt="proyect" title="Proyect" className="proyect-image" width="260px" />
        </p>
        <p style={{ color: "black" }}>
          <strong >Descripción: </strong>
          <br />{proyectDesc} <br />
          <strong>Modulos: </strong>
          <br />{proyectModul} <br />
          <strong >Tecnologias: </strong>
          <br /> {tecno}
        </p>
      </div>
    </div>
  );
};

export default Proyect;
