import express from "express";

const port = 5050;
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Serverul merge!");
});

app.listen(port, () => {
    console.log(`Serverul asteapta comenzi pe portul ${port}`);
});