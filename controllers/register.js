const { User } = require('./../models')

module.exports = {
    view: async (req, res) => {
        res.render('public/register.html')
    },

    create: async (req, res) => {

        const { body, errors } = req.this
        console.log(body)
        if(errors){
           return res.render('public/register.html', {errors, body})
        }
        
        return res.render('public/login.html')
    },
}