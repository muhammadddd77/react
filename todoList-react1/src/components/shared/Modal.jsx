
import "./Modal.css";

const Modal = ({ title, open = false, children, onResult, onClose }) => {
  return (
    <>
      {open && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{title}</h2>

            <div className="modal-content">{children}</div>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>

              <button className="save-btn" onClick={onResult}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
