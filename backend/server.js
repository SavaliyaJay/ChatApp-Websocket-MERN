const express = require("express");
const { chats } = require("./data/data");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to jay's application." });
});

app.get("/api/chats", (req, res) => {
    res.send(chats);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
