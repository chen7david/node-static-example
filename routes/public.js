const router = require('express-promise-router')()
const controller = require('./../controllers')
const { validateBody } = require('./../middleware/validation')

router.get('/',controller.public.home)


router.route('/register')
    .get(controller.register.view)
    
router.route('/login')
    .get(controller.login.view)

module.exports = router