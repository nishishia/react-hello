import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(true);

  const countUp = () => {
    setNum(num + 1);
  };
  const showFace = () => {
    setShowFaceFlag(!showFaceFlag);
  };

  useEffect(() => {
    console.log("初回だけ");
  }, []);
  useEffect(() => {
    console.log("顔だけ");
  }, [showFaceFlag]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello!!</h1>
      <ColorfulMessage color="black" message="あああ">
        111
      </ColorfulMessage>
      <ColorfulMessage color="red" message="いいい" />
      <button onClick={countUp}>ボタン</button>
      <br />
      <button onClick={showFace}>on/off</button>
      <p>{num}</p>
      {showFaceFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

//export default App;
