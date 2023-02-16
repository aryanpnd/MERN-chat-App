const express = require("express")
const {registerUser,authUser, allUsers} = require("../controllers/userController")
const {protect} = require('../middlewares/authMiddleware')
const router = express.Router()

router.route('/').post(registerUser).get(protect,allUsers)
router.route('/login').post(authUser)

module.exports = router