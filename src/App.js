import logo from './logo.svg';
import './App.css';
import Example from "./Example";
import Hello from "./Hello";
import Timer from "./Timer";
import {Suspense} from "react";
import Loading from "./Loading";
import useSWR from 'swr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Example />
      </div>
      <div>
        <Hello />
      </div>
      <div>
        <Timer />
      </div>
      <Suspense fallback={<Loading />}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

const MyComponent = () => {
  const apiUrl = 'https://api.publicapis.org/entries';
  // const fetcher = () => fetch(url);
  const fetcher = (url) => fetch(url).then(res => res.json())
  const {data, error} = useSWR(apiUrl, fetcher,  {suspense: true});
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading.........</div>
  return <p>data count {data.count}</p>;
}

export default App;
