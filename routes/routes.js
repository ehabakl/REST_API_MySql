const express = require("express")
const mainControllers = require("../controllers/mainControllers")
const router =express.Router()

router.route("/entities").get(mainControllers.getEntites)
router.route("/members").get(mainControllers.getMembers)
router.route("/entitiesmembers").get(mainControllers.getEntitesMembers)

module.exports = router;