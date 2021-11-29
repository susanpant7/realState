import React from "react";
import { Modal } from "react-bootstrap";

const HouseDetailsModal = ({ id, selectedImg, close }) => {
  return (
    <div>
      <Modal
        size="lg"
        show={true}
        onHide={close}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            House Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={selectedImg} alt="imgalt" style={{width:'-webkit-fill-available'}}/>    
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HouseDetailsModal;
