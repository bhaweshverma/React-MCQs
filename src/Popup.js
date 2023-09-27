const Popup = (props) => {
  return (
    props.trigger && (
      <div className="popup">
        <div className="popup-inner">
          <button
            className="popup-close-btn"
            onClick={() => props.onClose(false)}
          >
            Close
          </button>
          {props.children}
        </div>
      </div>
    )
  );
};

export default Popup;
