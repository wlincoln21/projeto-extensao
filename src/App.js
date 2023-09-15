import React from "react";
import "./App.css";
import Header from "./components/Header";
import CardObjetivos from "./components/CardObjetivos";

import { dataObjetivos } from "./data/Objetivos.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card">
        {dataObjetivos.map((obj, index) => (
          <CardObjetivos
            key={index}
            numero={obj.numero}
            titulo={obj.titulo}
            url={obj.url}
            descricao={obj.descricao}
          />
        ))}


      </div>
    </div>
  );
}

export default App;
