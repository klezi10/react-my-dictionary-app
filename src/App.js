import React, { Fragment } from "react";
import Dictionary from "./Components/Dictionary/Dictionary";
import Header from "./Components/UI/Header";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Dictionary defaultWord="wine" />
      <footer>
        Coded by{" "}
        <a
          href="https://www.klesdev.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Klesta Luli
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/klezi10/react-my-dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source
        </a>{" "}
      </footer>
    </Fragment>
  );
}
