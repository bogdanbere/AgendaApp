import express from "express";
import cors from "cors";
import fs from "fs";

const port = 5050;
const app = express();

app.use(cors());
app.use(express.json());

let lista = [];

const citesteLista = () => {
    const response = fs. readFileSync(`./lista.json`, "utf-8");
    lista = JSON.parse(response);
};

citesteLista();

const listaJson = JSON.stringify(lista);

app.get("/", (req, res) => {
    citesteLista();
    res.status(200).send(lista);
});

app.listen(port, () => {
    console.log(`Serverul asteapta comenzi pe portul ${port}`);
});