import React from "react";

const Display = ({ time }) => {
  return (
    <div className="wrap">
      {time.h === 0 ? "" : <span>{time.h >= 10 ? time.h : "0" + time.h}</span>}
      <p className={time.h === 0 ? "none" : "twodots"}>:</p>
      {time.m === 0 ? "" : <span>{time.m >= 10 ? time.m : "0" + time.m}</span>}
      <p className={time.m === 0 ? "none" : "twodots"}>:</p>
      {time.s === 0 ? "" : <span>{time.s >= 10 ? time.s : "0" + time.s}</span>}
      <p className={time.s === 0 ? "none" : "twodots"}>:</p>
      <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
    </div>
  );
};
export default Display;
