import {useEffect} from "react";

const Hello = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello!");
      }, 1000);
    return () => { clearInterval(timer);
    }
  }, []);
  return <p>Hello, world!</p>;
};

export default Hello;