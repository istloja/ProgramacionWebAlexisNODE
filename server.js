const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());//tipo de archivo 
app.use(bodyParser.urlencoded({ extended: true }));// tipo de metodo en postman


app.get("/", (req, res) => {
    console.log(req);
    res.json({ mensaje: "Hola mundo" });
});
app.listen(1111, () => { console.log("servidor Iniciado") });     //puerto=1111

app.get("/hola/es",(req, res)=> {
    res.json({ mensaje: "Hola mundo" });
    });
    app.get("/hola/en",(req, res)=> {
        res.json({ mensaje: "Wellow World" });
        });

