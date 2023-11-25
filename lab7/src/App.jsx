import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Program from './program';
import Formular from "./formular";
import Lipsa from "./lipsa";
import "./app.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [lista, setLista] = useState([]);

  const stergActiv = (id) => console.log("Sterg: " + id);

  const adaugaActiv = (act) => {
    act.id = lista.length + 1;
    setLista([...lista, act]);
  };

  const stil = {
    container: { maxWidth: "700px" },
  };

  return (
    <Container style={stil.container}>
      <Routes>
        <Route path="/" element={<Program activitati={lista} sterge={stergActiv} />} />
        <Route path="/formular" element={<Formular transmit={adaugaActiv} />} />
        <Route path="*" element={<Lipsa />} />
      </Routes>
    </Container>
  );
}