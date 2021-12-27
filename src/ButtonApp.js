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
export const radioOsAtom = atom({
  key: "radioOsAtom",
  default: "Windows",
});
export const btnCountAtom = atom({
  key: "btnCountAtom",
  default: 0,
});

// define selector
export const radioWithCountState = selector({
  key: "radioWithCountState",
  get: ({ get }) => {
    const radio = get(radioOsAtom);
    const btnCount = get(btnCountAtom);

    return radio + btnCount;
    // switch (radio) {
    //   case "Windows":
    //     return 10;
    //   case "Mac":
    //     return 20;
    //   case "Linux":
    //     return 30;
    //   default:
    //     return 0;
    // }
  },
});

// Main app
const ButtonApp = () => {
  const [btnCount, setBtnCount] = useRecoilState(btnCountAtom);

  // Incremental btn ==> initCount increased
  const handleClick = (event) => {
    setBtnCount(btnCount + 1);
  };

  return (
    <div>
      <h1>Operating System</h1>
      <div>
        <LikeRadioBtn>Child Radio</LikeRadioBtn>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Incrementor
        </button>
        <LikeBtn buttonType="success" />
      </div>
    </div>
  );
};

export default ButtonApp;
