import React, { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import ButtonApp from "./ButtonApp";

const App = () => {
  return (
    <RecoilRoot>
      <ButtonApp />
    </RecoilRoot>
  );
};

export default App;
