import React, { useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Program from './program';
import Formular from "./formular";
import Lipsa from "./lipsa";
import "./app.css";
import { Route, Routes, NavLink } from "react-router-dom";

export default function App() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/")
        .then((rezultat) => rezultat.json())
        .then((data) => setLista(data));
  }, []);

  const stergActiv = (id) => {
    const config = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`http://localhost:5050/sterg/${id}`, config) // Ruta catre server, diferita pentru fiecare aplicatie in CodeSandbox
      .then((resp) => resp.json())
      .then((data) => {
        setLista(data);
      });
  };

  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" }
  };

  const adaugaActiv = (act) => {
    act.id = lista.at(-1) ? lista.at(-1).id + 1 : 1;  // Cream un id nou si unic pentru fiecare nou obiect in fisier
    const config = {
      method: "POST",
      body: JSON.stringify(act),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch("https://localhost:5050/adaug", config) // Ruta catre server, diferita pentru fiecare aplicatie in CodeSandbox
      .then((resp) => resp.json())
      .then((data) => {
        setLista(data);
      });
  };

  return (
    <Container style={stil.container}>
      <Navbar bg="primary" variant="dark" expand="sm" className="p-2">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Program
            </NavLink>
            <NavLink
              to="/formular"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Formular
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={<Program activitati={lista} sterge={stergActiv} />}
        />
        <Route path="/formular" element={<Formular transmit={adaugaActiv} />} />
        <Route path="*" element={<Lipsa />} />
      </Routes>
    </Container>
  );
}