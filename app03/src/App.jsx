import { useEffect, useState } from "react";



export default function App() {

  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);


  useEffect(() => {

    document.title = `Count : ${count}`

  }, [count]);

  
  useEffect(() => {

    if(running == true){

    const interval = setInterval(() => {

      setSeconds(prevState => prevState + 1);

    }, 1000);

    return () => clearInterval(interval);

  }
    else {
      
    }

    
  }, [running]);

  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
      <div>
        {seconds}
        <button onClick={() => { setRunning(true)}}>Play</button>
        <button onClick={() => { setRunning(false)}}>Pause</button>
        <button onClick={() => { setSeconds(0)}}>Reset</button>
        <button onClick={() => { setRunning(false); setSeconds(0)}}>Reset and Stop</button>
      </div>

    </div>
  )
}