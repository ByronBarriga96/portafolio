import React from "react";

const ModalElement = ({ image, e, imgTitle, imgDesc, tags }) => {
  return (
    <div className="modal_element">
      <div className="col folio-item fondo-modal">
        <h6>{imgTitle}</h6>
        <p className="modal-description">{imgDesc}</p>
        <div className="tags-container">
          {tags && tags.map((element, index) => (
            <span key={index} className="badge">{element}</span>
          ))}
        </div>
        <a className="folio-item__thumb" onClick={e}>
          <div className="folio-item__thumb">
            <img src={image} alt="Project" title="Project" className="modal__image" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ModalElement;
