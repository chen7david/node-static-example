const router = require('express-promise-router')()
const controller = require('./../controllers')
const { validateBody, schema } = require('./../middleware/validation')

router.get('/',controller.public.home)


router.route('/register')
    .get(controller.register.view)
    .post(validateBody(schema.createUser), controller.register.create)
    
router.route('/login')
    .get(controller.login.view)
    .post(validateBody(schema.loginUser),controller.login.check)

module.exports = router