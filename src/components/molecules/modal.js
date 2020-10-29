import React from "react";
import PropTypes from "prop-types";

function Modal(props) {
  const { title, children, onClose, size, close } = props;

  return (
    <div
      className="modal fade show"
      tabIndex={-1}
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        overflowY: "auto",
      }}
    >
      <div className={`modal-dialog ${size}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            {close && (
              <button type="button" className="close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            )}
          </div>
          <div className="modal-body p-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.shape({ $$typeof: PropTypes.symbol }).isRequired,
  close: PropTypes.bool,
  save: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  close: true,
  save: true,
};

export default Modal;