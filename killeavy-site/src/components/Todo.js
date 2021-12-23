import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  //Can only be called directly in react functions
  //returns [current stored value, function that allows you to change the value in state]
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2> {props.text} </h2>
      <div className="actions">
        {/* <button className="btn btn--alt" onClick={editHandler}>Edit</button> */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* If both values are true, then the second thing is returned */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
