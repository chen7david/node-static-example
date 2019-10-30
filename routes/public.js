
module.exports ={

    homeRoute: async (req, res) => {
        res.render('index.html', {name:"max"})
    }
    
}