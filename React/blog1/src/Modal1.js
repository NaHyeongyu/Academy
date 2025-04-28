import React, { useState } from "react";

function Greeting(props) {
  return (
    <>
      <p>
        {props.name}님, 오늘 기분은 {props.emotion}입니다.
      </p>
    </>
  );
}

export default Greeting;
