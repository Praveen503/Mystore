const express= require('require');
const app= express();
const bodyParser= require('body-parser');

let mySql= require('mysql');
let path= require('path');

app.use(bodyParser.urlencoded({ extended: false }));

