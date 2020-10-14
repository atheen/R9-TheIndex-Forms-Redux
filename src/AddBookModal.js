import React, { useState, Component } from "react";

import BookForm from "./BookForm";
import Modal from "react-responsive-modal";

const AddBookModal = (props) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={closeModal} center>
        <BookForm author={props.author} closeModal={closeModal} />
      </Modal>
      <input type="button" onClick={openModal} value="Add New Book!" />
    </div>
  );
};

export default AddBookModal;
