const { User } = require('./../models')

module.exports = {
    view: async (req, res) => {
        res.render('public/register.html')
    },
}