import express from "express";
import cors from "cors";
const port = 5050;
const app = express();

app.use(cors());
app.use(express.json());

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

const listaJson = JSON.stringify(lista);

app.get("/", (req, res) => {
    res.status(200).send(listaJson);
});

app.listen(port, () => {
    console.log(`Serverul asteapta comenzi pe portul ${port}`);
});