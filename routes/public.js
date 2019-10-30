const router = require('express-promise-router')()
const controller = require('./../controllers')

router.get('/',controller.public.home)
router.get('/register',controller.public.register)
router.get('/login',controller.public.login)

module.exports = router