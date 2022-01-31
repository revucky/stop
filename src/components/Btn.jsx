import React from "react";

const Btn = ({ status, stop, reset, start, resume }) => {
  return (
    <div>
      {status === 0 ? (
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
          Start
        </button>
      ) : (
        ""
      )}
      {status === 1 ? (
        <div>
          <button onClick={stop} className="stopwatch-btn stopwatch-btn-red">
            Stop
          </button>
          <button onClick={reset} className="stopwatch-btn stopwatch-btn-yel">
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div>
          <button onClick={resume} className="stopwatch-btn stopwatch-btn-gre">
            Resume
          </button>
          <button onClick={reset} className="stopwatch-btn stopwatch-btn-yel">
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Btn;
