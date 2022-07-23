import React, { useEffect, useState } from "react";

export default function Timer(props) {
  const time = props.children;
  return (
    <>
      <div className="timer bg-light tile">
        <h2 style={{ margin: "0" }}>{time}</h2>
      </div>
    </>
  );
}
