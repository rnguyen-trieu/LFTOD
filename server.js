/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var path = require('path');
var express = require('express');

var app = express();
app.use('/', express.static(path.join(__dirname, 'app')));
app.listen(process.env.PORT || 8080);
console.log("Server is Running Press Ctrl-C to Exit");