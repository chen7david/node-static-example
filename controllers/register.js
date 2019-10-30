const { User } = require('./../models')

module.exports = {
    view: async (req, res) => {
        res.render('public/register.html')
    },

    create: async (req, res) => {
        const form = req.this.body
        console.log(form)
        res.render('public/login.html')
    },
}