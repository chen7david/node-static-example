const { User } = require('./../models')
const { UniqueViolationError } = require('objection-db-errors')
module.exports = {
    view: async (req, res) => {
        res.render('public/register.html')
    },

    create: async (req, res) => {

        const { body, errors } = req.this

        if(errors){
           return res.render('public/register.html', {errors, body})
        }

        try{
            const user = await User.query().insert(body)
            return res.render('public/login.html')
        }catch(error){
            if(error instanceof UniqueViolationError){
                const errors = {}
                errors['username'] = "this username is alreay taken"
                return res.render('public/register.html', {errors, body})
            }
        }
    },
}