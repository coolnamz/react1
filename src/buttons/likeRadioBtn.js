import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { radioOsState } from "../ButtonApp";

export const LikeRadioBtn = () => {
  const [radioOs, setRadioOs] = useRecoilState(radioOsState);

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="Windows"
          value="Windows"
          name="platform"
          type="radio"
          checked={radioOs === "Windows"}
          onChange={(e) => setRadioOs(e.target.value)}
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
          onChange={(e) => setRadioOs(e.target.value)}
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
          onChange={(e) => setRadioOs(e.target.value)}
        />
        <label className="form-check-label" htmlFor="Linux">
          Linux
        </label>
      </div>
    </div>
  );
};
