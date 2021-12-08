require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require("./routes/index")

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (err)=> console.error(err))
db.once('open', ()=> console.log('Connected to Server'))

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',indexRouter)
app.listen(process.env.PORT || 3000, console.log('Started'))