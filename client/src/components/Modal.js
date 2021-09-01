import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';

const Modal = (props) => {
  const { id, icon, modalHeader, modalText, handleConfirm } = props;
  const modalRef = useRef(null);

  useEffect(() => {
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%',
    };
    const { current } = modalRef;
    M.Modal.init(current, options);
  }, []);

  return (
    <>
      <a
        className="modal-trigger waves-effect waves-light secondary-content"
        data-target={`modal-${id}`}
        href="#!"
      >
        <i className="material-icons">{icon}</i>
      </a>

      <div ref={modalRef} id={`modal-${id}`} className="modal">
        <div className="modal-content">
          <h4>{modalHeader}</h4>
          <p>{modalText}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-red btn-flat">
            Cancel
          </button>
          <button
            className="modal-close waves-effect waves-green btn-flat"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
