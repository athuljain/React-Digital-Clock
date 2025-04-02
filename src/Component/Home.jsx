
import { useState } from "react";

export default function Home() {
  const [greet, setGreet] = useState("hlooo");
  const [clr, setClr] = useState("green");

  console.log(greet);
  function clickFunction() {
    setGreet("welcome");
    setClr("red");
  }

  return (
    <div>
      <h4 style={{ color: clr }}>Home page</h4>

      <h4>{greet}</h4>

      <button onClick={clickFunction}>click me</button>
    </div>
  );
}
