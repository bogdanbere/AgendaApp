import React, { useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Program from './program';
import Formular from "./formular";
import Lipsa from "./lipsa";
import "./app.css";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";

export default function App() {
  const [lista, setLista] = useState([]);
  const [edit, setEdit] = useState({
    id: 0,
    ora: "",
    titlu: "",
    loc: "",
    descriere: "",
  });
  const navigate = useNavigate();

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
    fetch(`http://localhost:5050/sterg/${id}`, config)
      .then((resp) => resp.json())
      .then((data) => {
        setLista(data);
      });
  };

  const adaugaActiv = (act) => {
    act.id = lista.at(-1) ? lista.at(-1).id + 1 : 1;
    const config = {
      method: "POST",
      body: JSON.stringify(act),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch("http://localhost:5050/adaug", config)
      .then((resp) => resp.json())
      .then((data) => {
        setLista(data);
        navigate("/");
      });
  };

  const editeazaActiv = (id) => {
    var obiect = lista.find((item) => +item.id === +id);
    if (obiect) {
      setEdit({
        id: obiect.id,
        ora: obiect.ora,
        titlu: obiect.titlu,
        loc: obiect.loc,
        descriere: obiect.descriere,
      });

      navigate("/formular");
    }
  };

  const editActiv = (elm) => {
    const config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(elm),
    };

    fetch("http://localhost:5050/editez", config)
      .then((resp) => resp.json())
      .then((data) => {
        setLista(data);
        navigate("/");
      });

    setEdit({
      id: 0,
      ora: "",
      titlu: "",
      loc: "",
      descriere: "",
    });
  };

  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" },
  };

  return (
    <Container style={stil.container}>
      <Navbar bg="primary" variant="dark" expand="sm" className="p-2">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
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
          element={
            <Program
              activitati={lista}
              sterge={stergActiv}
              editeaza={editeazaActiv}
            />
          }
        />
        <Route
          path="/formular"
          element={
            <Formular transmit={adaugaActiv} obedit={edit} editez={editActiv} />
          }
        />
        <Route path="*" element={<Lipsa />} />
      </Routes>
    </Container>
  );
}