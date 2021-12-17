import React, { useEffect, useState } from "react";

export const LikeRadioBtn = (props) => {
  const [selectedOS, setOSValue] = useState("Windows");

  const handleChange = (event) => {
    console.log(event.target.value);
    const newOS = event.target.value;
    setOSValue(newOS);
    if (props.onOSUpdate) {
      props.onOSUpdate(newOS);
    }
  };

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="Windows"
          value="Windows"
          name="platform"
          type="radio"
          checked={selectedOS === "Windows"}
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
          checked={selectedOS === "Mac"}
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
          checked={selectedOS === "Linux"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="Linux">
          Linux
        </label>
      </div>
    </div>
  );
};
