import React, { useState } from "react";
import { LikeBtn } from "./buttons/likeBtn";
import { LikeRadioBtn } from "./buttons/likeRadioBtn";

const App = () => {
  const [initCount, setInitCount] = useState(0);
  const [selectedOS, setOSValue] = useState("윈도우즈");

  // Incremental btn ==> initCount increased
  const handleClick = (event) => {
    setInitCount(initCount + 1);
  };

  // child의 행동이 parents에 전달됨
  const handleCountUpdate = (newCount) => {
    if (initCount !== newCount) {
      setInitCount(newCount);
    }
  };
  const handleOSUpdate = (newOS) => {
    if (selectedOS !== newOS) {
      setOSValue(newOS);
    }
  };
  return (
    <div className="col-6 my-5 mx-auto">
      <div className="card">
        <div className="card-header">
          <h2>Operating System</h2>
        </div>

        <div className="card-body">
          <h5 className="card-title">운영체제를 선택하여 주세요</h5>
          <LikeRadioBtn onOSUpdate={handleOSUpdate} />
          <button className="btn btn-primary" onClick={handleClick}>
            초기 숫자 증가
          </button>
          <LikeBtn
            buttonName={selectedOS}
            initCount={initCount}
            buttonType="success"
            onCountUpdate={handleCountUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
