const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const { urlencoded } = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

 app.get("/", (req, res) => {
        res.sendFile(__dirname + "/resume.html");
 });
app.get("/contact.html", (req, res) =>{
    res.sendFile(__dirname + "/contact.html");
} )

app.post("/", (req, res) => {
    const name = req.body.YourName;
    const email = req.body.Email;
    const message = req.body.message;

    res.send(`${name}! Thank you for contacting me!`);
})

app.listen(process.env.PORT, () => console.log('Starting app.'));