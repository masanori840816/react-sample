import "./IndexPage.css";
import { useEffect, useState } from "react";

import viteLogo from '/vite.svg'
export function IndexPage(): JSX.Element {

  console.log(import.meta.env.VITE_SERVER_APP_URL);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_APP_URL}/pointclouds`, {
      mode: "cors",
      method: "GET"
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }, []);
  const [count, setCount] = useState(0)
    return <div className="main_page_area">
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-blue-500 text-3xl font-bold underline">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>;
}

export default IndexPage;