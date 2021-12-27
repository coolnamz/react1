import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";

import { radioOsAtom, btnCountAtom, radioWithCountState } from "../ButtonApp";

export const LikeBtn = (props) => {
  const radioOs = useRecoilValue(radioOsAtom);
  const [btnCount, setBtnCount] = useRecoilState(btnCountAtom);
  const btnCountOS = useRecoilValue(radioWithCountState);

  // props.initCount가 증가하면 이에 반응함 (parent 값에 반응)
  // useEffect(() => {
  //   setCount(props.initCount);
  // }, [props.initCount]);

  const plusCount = () => {
    const newCount = btnCount + 1;
    setBtnCount(newCount);
  };

  const minusCount = () => {
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
        {radioOs} {btnCount} {btnCountOS}
      </button>
      <button className={buttonClassname} onClick={minusCount}>
        -
      </button>
    </div>
  );
};
