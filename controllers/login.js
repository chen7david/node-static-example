const { User } = require('./../models')
const JWT = require('jsonwebtoken')

module.exports = {
    view: async (req, res) => {
        res.render('public/login.html')
    },

    check: async (req, res) => {
        const { body, errors } = req.this

        if(errors){
           return res.render('public/login.html', {errors, body})
        }
        
        const user = await User.query().where('username',body.username).first()
        const error = {}
        if(!user){
            error['username'] = "incorrect username"
            return res.render('public/login.html', {errors: error, body})
        }

        if(! await user.verifyPassword(body.password)){
            error['password'] = "incorrect password"
            return res.render('public/login.html', {errors: error, body})
        }
        
        return res.render('public/index.html')
    },
}