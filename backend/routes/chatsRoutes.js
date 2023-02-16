const express = require('express')
const { protect } = require('../middlewares/authMiddleware')
const { accessChats, fetchChats } = require('../controllers/chatControllers')

const router = express.Router()

router.route('/').post(protect,accessChats)
router.route('/').get(protect,fetchChats)
// router.route('/group').post(protect,createGroupChats)
// router.route('/rename').put(protect,renameGroup)
// router.route('/removefromgroup').put(protect, removeFromGroup)
// router.route('/addtogroup').put(protect, addToGroup)

module.exports = router
