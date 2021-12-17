import React, { useEffect, useState } from "react";

export const LikeBtn = (props) => {
  const [count, setCount] = useState(null);
  console.log("LikeBtn", count, props.initCount);

  // props.initCount가 증가하면 이에 반응함 (parent 값에 반응)
  useEffect(() => {
    setCount(props.initCount);
  }, [props.initCount]);

  const plusCount = (event) => {
    const newCount = count + 1;
    setCount(newCount);
    if (props.onCountUpdate) {
      props.onCountUpdate(newCount);
    }
  };

  const minusCount = (event) => {
    let newCount = count;
    if (count <= 0) {
      newCount = 0;
    } else {
      newCount = count - 1;
    }
    setCount(newCount);
    if (props.onCountUpdate) {
      props.onCountUpdate(newCount);
    }
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
        {props.buttonName} {count}
      </button>
      <button className={buttonClassname} onClick={minusCount}>
        -
      </button>
    </div>
  );
};
