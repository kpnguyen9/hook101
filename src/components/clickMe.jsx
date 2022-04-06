import React, { useEffect, useState, useContext } from "react";
import { MoodContext } from "../App";

function ClickMe() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const happy = useContext(MoodContext);

  useEffect(() => {
    fetch("foo").then(() => setLoaded(true));
  }, [count]);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me{happy}</button>
    </div>
  );
}

export default ClickMe;
