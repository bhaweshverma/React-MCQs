import "./Humanetics.css";

const Humanetics = () => {
  return (
    <>
      <h1>Humanetics Assignment</h1>
      <div className="container">
        <svg height="400" width="400" className="sensor-container">
          {/* <!-- legs --> */}
          <line x1="140" y1="230" x2="80" y2="290" />
          <circle
            cx="80"
            cy="290"
            r="10"
            id="7"
            className="state-signal-default"
          />
          <line x1="140" y1="230" x2="200" y2="290" />
          <circle
            cx="200"
            cy="290"
            r="10"
            id="9"
            className="state-signal-default"
          />
          {/* <!-- chest --> */}
          <line x1="60" y1="130" x2="220" y2="130" />

          {/* <!-- body --> */}
          <line x1="140" y1="100" x2="140" y2="230" />
          <circle
            cx="140"
            cy="130"
            r="10"
            id="5"
            className="state-signal-default"
          />
          <circle
            cx="140"
            cy="230"
            r="10"
            id="8"
            className="state-signal-default"
          />

          {/* <!-- arms --> */}
          <line x1="60" y1="130" x2="40" y2="100" />
          <circle
            cx="40"
            cy="100"
            r="10"
            id="3"
            className="state-signal-default"
          />
          <circle
            cx="60"
            cy="130"
            r="10"
            id="4"
            className="state-signal-default"
          />

          <line x1="220" y1="130" x2="240" y2="100" />
          <circle
            cx="240"
            cy="100"
            r="10"
            id="6"
            className="state-signal-default"
          />

          {/* <!-- heaad --> */}
          <circle cx="140" cy="70" r="30" id="10" />
          <circle
            cx="140"
            cy="40"
            r="10"
            id="1"
            className="state-signal-default"
          />
          <circle
            cx="140"
            cy="110"
            r="10"
            id="2"
            className="state-signal-default"
          />
        </svg>
        <div className="m-4">
          <label id="dummy">In dummy the value is - GGGGGRYRG </label>
        </div>
        <div className="m-4">
          <label for="state">Enter 9 character string : </label>
          <input type="text" id="state" className="txtState" />
          <p id="paraError">
            Please enter 9 character string which should only include G, R or Y
            characters or refer to dummy value above
          </p>
        </div>
      </div>
    </>
  );
};

export default Humanetics;
