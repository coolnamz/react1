import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { radioOsState, btnCountState } from "../ButtonApp";

export const LikeBtn = (props) => {
  const radioOs = useRecoilValue(radioOsState);
  const [btnCount, setBtnCount] = useRecoilState(btnCountState);

  // props.initCount가 증가하면 이에 반응함 (parent 값에 반응)
  // useEffect(() => {
  //   setCount(props.initCount);
  // }, [props.initCount]);

  const plusCount = (event) => {
    const newCount = btnCount + 1;
    setBtnCount(newCount);
  };

  const minusCount = (event) => {
    let newCount = btnCount;
    if (btnCount <= 0) {
      newCount = 0;
    } else {
      newCount = btnCount - 1;
    }
    setBtnCount(newCount);
  };

  const buttonClassname = props.buttonType
    ? "btn btn-" + props.buttonType
    : "btn btn-primary";

  return (
    <div className="btn-group">
      <button className={buttonClassname} onClick={plusCount}>
        +
      </button>
      <button className={buttonClassname}>
        {radioOs} {btnCount}
      </button>
      <button className={buttonClassname} onClick={minusCount}>
        -
      </button>
    </div>
  );
};
