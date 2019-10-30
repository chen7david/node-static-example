const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

// app.use(bodyParser.)

app.use('/', (req, res) => {
    res.render('index.html', {name:"david"})
})

module.exports = app