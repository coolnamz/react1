import React, { useState } from "react";
import { LikeBtn } from "./buttons/likeBtn";
import { LikeRadioBtn } from "./buttons/likeRadioBtn";

const App = () => {
  const [count, setCount] = useState(0);
  const [selectedOS, setOSValue] = useState("Windows");

  // Incremental btn ==> initCount increased
  const handleClick = (event) => {
    setCount(count + 1);
  };
  // child의 행동이 parents에 전달됨
  const handleCountUpdate = (newCount) => {
    if (count != newCount) {
      setCount(newCount);
    }
  };
  const handleOSUpdate = (newOS) => {
    if (selectedOS != newOS) {
      setOSValue(newOS);
    }
  };
  return (
    <div>
      <h1>Operating System</h1>
      <div>
        <LikeRadioBtn onOSUpdate={handleOSUpdate} />
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Incrementor
        </button>
        <LikeBtn
          buttonName={selectedOS}
          initCount={count}
          buttonType="success"
          onCountUpdate={handleCountUpdate}
        />
      </div>
    </div>
  );
};

export default App;
