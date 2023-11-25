import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Program from './program';
import './App.css'

const lista = [
  {
    id: 1,
    ora: "10:30",
    loc: "Sala G08",
    titlu: "Întâlnire cu presa",
    descriere: "Nu e cazul."
  },
  {
    id: 2,
    ora: "11:00",
    loc: "Birou",
    titlu: "Pauză de cafea",
    descriere: "Nu e cazul."
  },
  {
    id: 3,
    ora: "12:00",
    loc: "Birou",
    titlu: "Pregătire curs",
    descriere: "Pregătirea unui studiu de caz."
  }
];

export default function App() {
  const stergActiv = (id) => console.log("Sterg: " + id);
  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" }
  };

  return (
    <Container style={stil.container}>
      <Program activitati={lista} sterge={stergActiv} />
    </Container>
  );
}
