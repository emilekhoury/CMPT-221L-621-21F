const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8000;

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/login", function(req, res) {
    var email = req.body.login.email;
    var password = req.body.login.password;

    console.log("Login: ", email, password);
    res.redirect("/");
});

app.post("/signup", function(req, res) {
    var email = req.body.signup.email;
    var password = req.body.signup.password;

    console.log("Sign up: ", email, password);
    res.redirect("/");
});

app.listen(port, function() {
    console.log("Server running on localhost:8000");
});