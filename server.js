const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index')

app.set('view engine','ejs')
app.set('views',__dirname +'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/IPTrandes' ,{
    useNewUrlParser:true ,useUnifiedTopology:true , useCreateIndex:true
})

app.use('/',indexRouter)

app.listen(1000,(req,res)=>{
    console.log("we are listning");
});