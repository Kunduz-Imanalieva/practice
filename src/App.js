import { useState } from "react";
import Countdown from "./components/Countdown/Countdown";
const App = () => {
  const [a, setA] = useState(randomNumber(50));
  const [b, setB] = useState(randomNumber(50));
  const [answer, setAnswer] = useState("?");
  const [countdown, setCountdown] = useState(20);
  function randomNumber(limit) {
    return Math.round(Math.random() * limit);
  }
  
  return (
    <div className="App">
      
      {a} + {b} = {answer}
      <Countdown countdown={countdown} setCountdown={setCountdown} />
      <input type="number" value={answer} onChange={({ target }) => setAnswer(target.value)} />
      <button onClick={() => checkAnswer()}>Ok</button>
    </div>
  );
}
export default App;