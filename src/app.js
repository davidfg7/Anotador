const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const notasRouter = require('./routes/notasRouter');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', notasRouter);

app.listen(3000, function(){
    console.log("El servidor está corriendo en el puerto 3000")
})