const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const useragent = require('express-useragent')
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(useragent.express())


app.use('/assets', express.static('views/assets'))
app.use('/', (req, res) => {
    res.render('index.html', {name:"david"})
})

app.use((req,res,next)=>{
    throw({ status: 422, message:'ROUTENOTFOUND'})
})

app.use((error, req, res, next)=>{
    console.log(error.message)
    res.status(200).json({error})
})

module.exports = app