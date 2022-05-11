import React from "react";
import PropTypes from 'prop-types';
import "./Modal.css";


const Modal = function ({ title, onClose, show, children }) {
    const close = (e) => {
        return onClose && onClose(e);
    };
    return show && (
      <>
      <div className="darkBG"></div>
      <div className="modal" id="modal">
        <h2>{title}</h2>
        <div className="content">{children}</div>
        <div className="actions">
          <button className="toggle-button" onClick={close}>
            Close
          </button>
        </div>
      </div>
      </>
    );
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
export default Modal;