import {useEffect, useState} from "react";

const useTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);
  return count;
};

const Timer = () => {
  const count = useTimer();
  return <p>{count}</p>;
};

export default Timer;