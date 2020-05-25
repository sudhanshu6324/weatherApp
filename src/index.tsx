import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { CardList } from "./components/CardList";
import { MainApp } from "./components/MainApp";
// import { http } from "./components/Util";
// import { CardListProps } from "./components/CardList";
// import { TempCard } from "./components/TempCard";

// const data: any = (async function getData() {
//   const data: any = await http(
//     "https://api.weatherbit.io/v2.0/forecast/hourly?city=kolkata&key=63eade06d0b54c00a282e0b047200de0&hours=48"
//   );
//   return data;
// })();

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
