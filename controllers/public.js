
module.exports ={

    home: async (req, res) => {
        res.render('public/index.html', {name:"max"})
    },

    register: async (req, res) => {
        res.render('public/register.html')
    },

    login: async (req, res) => {
        res.render('public/login.html')
    },
    
}