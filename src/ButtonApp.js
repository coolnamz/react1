import React, { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { LikeBtn } from "./buttons/likeBtn";
import { LikeRadioBtn } from "./buttons/likeRadioBtn";

// define atoms
export const radioOsState = atom({
  key: "radioOsState",
  default: "Windows",
});
export const btnCountState = atom({
  key: "btnCountState",
  default: 0,
});

// Main app
const ButtonApp = () => {
  const radioOs = useRecoilValue(radioOsState);
  const [btnCount, setBtnCount] = useRecoilState(btnCountState);

  // Incremental btn ==> initCount increased
  const handleClick = (event) => {
    setBtnCount(btnCount + 1);
  };

  return (
    <div>
      <h1>Operating System</h1>
      <div>
        <LikeRadioBtn />
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Incrementor
        </button>
        <LikeBtn
          buttonName={radioOs}
          initCount={btnCount}
          buttonType="success"
        />
      </div>
    </div>
  );
};

export default ButtonApp;
