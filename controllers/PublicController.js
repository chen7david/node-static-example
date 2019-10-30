
module.exports ={

    home: async (req, res) => {
        console.log('public')
        res.render('public/index.html', {name:"max"})
    }
    
}