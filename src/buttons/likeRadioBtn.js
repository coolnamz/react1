import React, { useEffect, useState } from "react";

export const LikeRadioBtn = (props) => {
  const selectList = ["윈도우즈", "맥", "리눅스"];
  const [selectedOS, setOSValue] = useState("윈도우즈");

  const handleChange = (event) => {
    const newOS = event.target.value;
    setOSValue(newOS);
    if (props.onOSUpdate) {
      props.onOSUpdate(newOS);
    }
  };

  return (
    <React.Fragment>
      {selectList.map((value, i) => {
        return (
          <React.Fragment key={i}>
            <div className="form-check">
              <input
                className="form-check-input"
                id={value}
                value={value}
                name="platform"
                type="radio"
                checked={selectedOS === value}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={value}>
                {value}
              </label>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
