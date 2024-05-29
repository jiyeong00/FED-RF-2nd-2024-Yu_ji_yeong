import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    $(".App-header span").hover(
      (e) => {
        // 오버시
        $(e.currentTarget).stop().animate(
          {
            scale: 1.4,
          },
          500
        );
      },
      (e) => {
        // 아웃시
        $(e.currentTarget).stop().animate(
          {
            scale: 1,
          },
          500
        );
      }
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <img
            src="https://image.cine21.com/resize/cine21/person/2019/1030/11_35_56__5db8f70c422b9[X252,310].jpg"
            className="App-logo"
            alt="logo"
          />
        </span>
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
    </div>
  );
}

export default App;
