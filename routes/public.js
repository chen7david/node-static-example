const router = require('express-promise-router')()
const { PublicController } = require('./../controllers')

router.route('/')
    .get(PublicController.home)

module.exports = router