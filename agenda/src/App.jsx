import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Program from './program';
import Formular from "./formular";
import Lipsa from "./lipsa";
import "./app.css";
import { Route, Routes, NavLink } from "react-router-dom";

export default function App() {
  const [lista, setLista] = useState([]);

  const stergActiv = (id) => {
    const listaNoua = lista.filter((item) => {
      if (item.id !== parseInt(id, 10)) {
        return true;
      }
      return false;
    });
    setLista([...listaNoua]);
  };

  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" }
  };

  const adaugaActiv = (act) => {
    act.id = lista.length + 1;
    setLista([...lista, act]);
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