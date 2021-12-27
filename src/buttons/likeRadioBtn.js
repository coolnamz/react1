import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { radioOsAtom, btnCountAtom, radioWithCountState } from "../ButtonApp";

export const LikeRadioBtn = (props) => {
  const [radioOs, setRadioOs] = useRecoilState(radioOsAtom);

  const [btnCount, setBtnCount] = useRecoilState(btnCountAtom);

  // useEffect(() => {
  //   setBtnCount(btnCountOS);
  // }, [btnCountOS]);

  function handleChange(e) {
    setRadioOs(e.target.value);
  }

  return (
    <div>
      <h2>{props.children}</h2>
      <div className="form-check">
        <input
          className="form-check-input"
          id="Windows"
          value="Windows"
          name="platform"
          type="radio"
          checked={radioOs === "Windows"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="Windows">
          Windows
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="Mac"
          value="Mac"
          name="platform"
          type="radio"
          checked={radioOs === "Mac"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="Mac">
          Mac
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="Linux"
          value="Linux"
          name="platform"
          type="radio"
          checked={radioOs === "Linux"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="Linux">
          Linux
        </label>
      </div>
    </div>
  );
};
