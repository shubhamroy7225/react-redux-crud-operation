import React from "react";
import Modal from "react-bootstrap/Modal";
import FormUser from "../form/FormUser";
function ModalUser(props) {
  return (
    <div>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>User Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUser onClose={props.onHide} userData={props.data} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalUser;
